import PageShell from '../components/PageShell.jsx';
import { orgSettings, permissionGroups } from '../data/mockData.js';

export default function Settings() {
  return (
    <PageShell
      title="Settings and Administration"
      subtitle="Control roles, permissions, and core organizational configuration."
      actions={<button className="primary-button">Save changes</button>}
    >
      <div className="content-grid two-column">
        <section className="panel">
          <div className="panel-header">
            <h3>Permissions</h3>
            <span className="muted-link">Access matrix</span>
          </div>
          <div className="permission-list">
            {permissionGroups.map((group) => (
              <div className="permission-card" key={group.name}>
                <strong>{group.name}</strong>
                <ul>
                  {group.permissions.map((permission) => (
                    <li key={permission}>{permission}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Organization settings</h3>
            <span className="muted-link">Core policy</span>
          </div>
          <div className="detail-stack">
            <div className="detail-row">
              <span>Company</span>
              <strong>{orgSettings.company}</strong>
            </div>
            <div className="detail-row">
              <span>Timezone</span>
              <strong>{orgSettings.timezone}</strong>
            </div>
            <div className="detail-row">
              <span>Work week</span>
              <strong>{orgSettings.workWeek}</strong>
            </div>
            <div className="detail-row">
              <span>Leave policy</span>
              <strong>{orgSettings.leavePolicy}</strong>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
