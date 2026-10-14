import { useEffect, useState } from 'react';
import { api } from '../api.js';
import PageShell from '../components/PageShell.jsx';

const approver = ['team_leader', 'process_manager'];

export default function Leave({ user }) {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({ type: 'Casual', from: '', to: '', reason: '' });
  const [error, setError] = useState('');

  const load = () => api('/leave').then(setRows).catch((e) => setError(e.message));

  useEffect(() => {
    load();
  }, []);

  const run = (fn) => async () => {
    try {
      setError('');
      await fn();
      load();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <PageShell
      title="Leave Management"
      subtitle="Track absences, manage leave requests, and review approval workflow across the organization."
      actions={<button className="primary-button">Leave balance</button>}
    >
      {error && <p className="error">{error}</p>}

      {user.role === 'employee' && (
        <section className="panel">
          <div className="panel-header">
            <h3>Apply for leave</h3>
            <span className="muted-link">12 days remaining</span>
          </div>
          <div className="leave-form">
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option>Casual</option>
              <option>Sick</option>
              <option>Earned</option>
            </select>
            <input type="date" value={form.from} onChange={(e) => setForm({ ...form, from: e.target.value })} />
            <input type="date" value={form.to} onChange={(e) => setForm({ ...form, to: e.target.value })} />
            <input placeholder="Reason" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} />
            <button className="primary-button" onClick={run(() => api('/leave', { method: 'POST', body: form }))}>Apply</button>
          </div>
        </section>
      )}

      <section className="panel">
        <div className="panel-header">
          <h3>Leave requests</h3>
          <span className="muted-link">Recent activity</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Type</th>
                <th>Dates</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((leave) => {
                const statusClass = leave.status.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                return (
                  <tr key={leave.id}>
                    <td>{leave.employeeId}</td>
                    <td>{leave.type}</td>
                    <td>{leave.from} to {leave.to}</td>
                    <td>{leave.reason}</td>
                    <td><span className={`status-badge ${statusClass}`}>{leave.status}</span></td>
                    <td>
                      {approver.includes(user.role) && leave.status.startsWith('Pending') && (
                        <div className="row">
                          <button onClick={run(() => api(`/leave/${leave.id}/decision`, { method: 'PATCH', body: { approve: true } }))}>Approve</button>
                          <button className="ghost" onClick={run(() => api(`/leave/${leave.id}/decision`, { method: 'PATCH', body: { approve: false } }))}>Reject</button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
