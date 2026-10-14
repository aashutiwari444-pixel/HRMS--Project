import PageShell from '../components/PageShell.jsx';
import { attendanceRecords } from '../data/mockData.js';

export default function Attendance() {
  const present = attendanceRecords.filter((item) => item.status === 'Present').length;
  const late = attendanceRecords.filter((item) => item.status === 'Late').length;

  return (
    <PageShell
      title="Attendance Management"
      subtitle="Track daily presence, punctuality, and team attendance across departments."
      actions={<button className="primary-button">Check-in</button>}
    >
      <div className="metrics-grid three-col">
        <div className="metric-card compact">
          <h3>{present}</h3>
          <p>Present today</p>
        </div>
        <div className="metric-card compact">
          <h3>{late}</h3>
          <p>Late arrivals</p>
        </div>
        <div className="metric-card compact">
          <h3>96.4%</h3>
          <p>Attendance rate</p>
        </div>
      </div>

      <div className="content-grid two-column">
        <section className="panel">
          <div className="panel-header">
            <h3>Daily attendance</h3>
            <span className="muted-link">This week</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Check-in</th>
                  <th>Check-out</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((row) => (
                  <tr key={`${row.employee}-${row.date}`}>
                    <td>{row.employee}</td>
                    <td>{row.department}</td>
                    <td>{row.checkIn}</td>
                    <td>{row.checkOut}</td>
                    <td><span className={`status-badge ${row.status.toLowerCase().replace(/\s+/g, '-')}`}>{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Mark attendance</h3>
            <span className="muted-link">Manual entry</span>
          </div>
          <form className="stack-form">
            <label>
              Employee
              <select defaultValue="Asha Verma">
                <option>Asha Verma</option>
                <option>Rohit Mehra</option>
                <option>Neha Kapoor</option>
              </select>
            </label>
            <label>
              Date
              <input type="date" defaultValue="2026-10-14" />
            </label>
            <label>
              Status
              <select defaultValue="Present">
                <option>Present</option>
                <option>Late</option>
                <option>Absent</option>
                <option>On leave</option>
              </select>
            </label>
            <button type="button" className="primary-button">Save attendance</button>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
