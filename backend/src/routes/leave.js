import { Router } from 'express';
import config from '../config.js';
import { notReady } from '../db.js';
import { employees, leaves } from '../mock.js';
import { requireAuth, allow } from '../middleware/auth.js';
const r = Router();
r.use(requireAuth);

// Employee -> Team Leader -> Process Manager -> Approved / Rejected
r.get('/', (req, res) => {
  if (!config.useMock) return notReady(res);
  const { id, role } = req.user;
  const team = (l) => employees.find((e) => e.id === l.employeeId)?.teamLeaderId === id;
  const list = role === 'team_leader' ? leaves.filter(team)
    : ['process_manager', 'hr_admin'].includes(role) ? leaves
    : leaves.filter((l) => l.employeeId === id);
  res.json(list);
});
r.post('/', (req, res) => {
  if (!config.useMock) return notReady(res);
  const leave = { id: leaves.length + 1, employeeId: req.user.id, ...req.body, status: 'Pending Team Leader' };
  leaves.push(leave);
  res.status(201).json(leave);
});
r.patch('/:id/decision', allow('team_leader', 'process_manager'), (req, res) => {
  if (!config.useMock) return notReady(res);
  const leave = leaves.find((l) => l.id === Number(req.params.id));
  if (!leave) return res.status(404).json({ error: 'Leave request not found.' });
  const { role, id } = req.user;
  const myTurn = (role === 'team_leader' && leave.status === 'Pending Team Leader' &&
      employees.find((e) => e.id === leave.employeeId)?.teamLeaderId === id) ||
    (role === 'process_manager' && leave.status === 'Pending Process Manager');
  if (!myTurn) return res.status(409).json({ error: 'This request is not waiting for you.' });
  leave.status = !req.body.approve ? 'Rejected' : role === 'team_leader' ? 'Pending Process Manager' : 'Approved';
  res.json(leave);
});
export default r;
