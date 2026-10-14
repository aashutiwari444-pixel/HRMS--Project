import PageShell from '../components/PageShell.jsx';
import { grievanceList } from '../data/mockData.js';

export default function Grievances() {
  return (
    <PageShell
      title="Employee Grievances"
      subtitle="Handle complaints, escalate concerns, and track resolution status."
      actions={<button className="primary-button">New grievance</button>}
    >
      <div className="content-grid two-column">
        <section className="panel">
          <div className="panel-header">
            <h3>Grievance tracker</h3>
            <span className="muted-link">Open cases</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Category</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Assignee</th>
                </tr>
              </thead>
              <tbody>
                {grievanceList.map((item) => (
                  <tr key={`${item.title}-${item.priority}`}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td><span className={`status-badge ${item.priority.toLowerCase()}`}>{item.priority}</span></td>
                    <td><span className={`status-badge ${item.status.toLowerCase().replace(/\s+/g, '-')}`}>{item.status}</span></td>
                    <td>{item.assignee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Submit grievance</h3>
            <span className="muted-link">Confidential</span>
          </div>
          <form className="stack-form">
            <label>
              Subject
              <input type="text" defaultValue="Workstation issue" />
            </label>
            <label>
              Category
              <select defaultValue="Facilities">
                <option>Facilities</option>
                <option>Payroll</option>
                <option>Scheduling</option>
                <option>Management</option>
              </select>
            </label>
            <label>
              Priority
              <select defaultValue="High">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>
            <label>
              Details
              <textarea rows="4" defaultValue="Need urgent review of workstation ergonomics and noise levels in the office." />
            </label>
            <button type="button" className="primary-button">Submit grievance</button>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
