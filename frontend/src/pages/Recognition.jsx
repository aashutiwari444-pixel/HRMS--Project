import PageShell from '../components/PageShell.jsx';
import { recognitionList } from '../data/mockData.js';

export default function Recognition() {
  return (
    <PageShell
      title="Recognition and Rewards"
      subtitle="Celebrate employee impact, milestones, and performance recognition."
      actions={<button className="primary-button">Nominate employee</button>}
    >
      <section className="panel">
        <div className="panel-header">
          <h3>Reward history</h3>
          <span className="muted-link">This quarter</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>Category</th>
                <th>Reward</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recognitionList.map((item) => (
                <tr key={`${item.employee}-${item.date}`}>
                  <td>{item.employee}</td>
                  <td>{item.category}</td>
                  <td>{item.reward}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageShell>
  );
}
