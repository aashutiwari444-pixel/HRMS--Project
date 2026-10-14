import PageShell from '../components/PageShell.jsx';
import { reimbursementClaims } from '../data/mockData.js';

export default function Reimbursements() {
  return (
    <PageShell
      title="Employee Reimbursements"
      subtitle="Review claim submissions, reimbursements, and approval status."
      actions={<button className="primary-button">New claim</button>}
    >
      <div className="content-grid two-column">
        <section className="panel">
          <div className="panel-header">
            <h3>Claim history</h3>
            <span className="muted-link">2026</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {reimbursementClaims.map((item) => (
                  <tr key={`${item.employee}-${item.date}`}>
                    <td>{item.employee}</td>
                    <td>{item.category}</td>
                    <td>{item.amount}</td>
                    <td>{item.date}</td>
                    <td><span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Submit reimbursement</h3>
            <span className="muted-link">Expense claim</span>
          </div>
          <form className="stack-form">
            <label>
              Category
              <select defaultValue="Travel">
                <option>Travel</option>
                <option>Medical</option>
                <option>Internet</option>
                <option>Training</option>
              </select>
            </label>
            <label>
              Amount
              <input type="number" defaultValue="4250" />
            </label>
            <label>
              Date
              <input type="date" defaultValue="2026-10-06" />
            </label>
            <label>
              Notes
              <textarea rows="4" defaultValue="Quarterly travel reimbursement for client visit." />
            </label>
            <button type="button" className="primary-button">Submit claim</button>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
