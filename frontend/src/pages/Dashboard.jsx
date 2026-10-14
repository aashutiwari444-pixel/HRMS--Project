import PageShell from '../components/PageShell.jsx';
import { dashboardStats, recentActivities } from '../data/mockData.js';

function MetricCard({ item }) {
  return (
    <div className="metric-card">
      <div className="metric-card__meta">
        <span className={`metric-icon ${item.tone}`}>{item.icon}</span>
        <span className="metric-change positive">{item.change}</span>
      </div>
      <h3>{item.value}</h3>
      <p>{item.label}</p>
    </div>
  );
}

export default function Dashboard() {
  return (
    <PageShell
      title="Dashboard"
      subtitle="Overview of people, operations, and employee experience at a glance."
      actions={<button className="primary-button">Generate report</button>}
    >
      <div className="metrics-grid">
        {dashboardStats.map((item) => (
          <MetricCard key={item.label} item={item} />
        ))}
      </div>

      <div className="content-grid two-column">
        <section className="panel">
          <div className="panel-header">
            <h3>Recent activities</h3>
            <span className="muted-link">View all</span>
          </div>
          <div className="list-stack">
            {recentActivities.map((activity) => (
              <div className="activity-item" key={`${activity.title}-${activity.time}`}>
                <span className="dot-indicator" />
                <div>
                  <strong>{activity.title}</strong>
                  <p>{activity.detail}</p>
                </div>
                <small>{activity.time}</small>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Quick insights</h3>
            <span className="muted-link">Updated now</span>
          </div>
          <div className="insight-card">
            <div>
              <span className="insight-label">Attendance compliance</span>
              <strong>96.4%</strong>
            </div>
            <div>
              <span className="insight-label">Avg. response time</span>
              <strong>2.8 hrs</strong>
            </div>
            <div>
              <span className="insight-label">Open grievances</span>
              <strong>07</strong>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
