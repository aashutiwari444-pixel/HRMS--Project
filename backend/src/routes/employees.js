import { Router } from 'express';
import config from '../config.js';
import { notReady } from '../db.js';
import { employees } from '../mock.js';
import { requireAuth, allow } from '../middleware/auth.js';
const r = Router();
r.use(requireAuth);
r.get('/me', (req, res) => {
  if (!config.useMock) return notReady(res);
  res.json(employees.find((e) => e.id === req.user.id));
});
r.get('/', allow('hr_admin', 'team_leader', 'process_manager'), (req, res) => {
  if (!config.useMock) return notReady(res);
  res.json(employees);
});
export default r;
