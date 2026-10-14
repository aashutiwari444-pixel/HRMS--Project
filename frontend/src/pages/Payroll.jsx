import PageShell from '../components/PageShell.jsx';
import { payrollRecords } from '../data/mockData.js';

export default function Payroll() {
  return (
    <PageShell
      title="Payroll and Salary"
      subtitle="Review monthly salaries, components, deductions, and payroll status."
      actions={<button className="primary-button">Process payroll</button>}
    >
      <div className="metrics-grid three-col">
        <div className="metric-card compact">
          <h3>₹3.8L</h3>
          <p>Total payroll</p>
        </div>
        <div className="metric-card compact">
          <h3>₹48K</h3>
          <p>Average salary</p>
        </div>
        <div className="metric-card compact">
          <h3>3</h3>
          <p>Pending approvals</p>
        </div>
      </div>

      <section className="panel">
        <div className="panel-header">
          <h3>Monthly salary overview</h3>
          <span className="muted-link">October 2026</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Basic</th>
                <th>Bonus</th>
                <th>Deductions</th>
                <th>Net pay</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {payrollRecords.map((row) => (
                <tr key={`${row.employee}-${row.month}`}>
                  <td>{row.employee}</td>
                  <td>{row.basic}</td>
                  <td>{row.bonus}</td>
                  <td>{row.deductions}</td>
                  <td>{row.net}</td>
                  <td><span className={`status-badge ${row.status.toLowerCase()}`}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
