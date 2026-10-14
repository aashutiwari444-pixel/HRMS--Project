import PageShell from '../components/PageShell.jsx';
import { assetInventory } from '../data/mockData.js';

export default function Assets() {
  return (
    <PageShell
      title="IT Assets Management"
      subtitle="Track company devices, asset assignment, and maintenance status."
      actions={<button className="primary-button">Add asset</button>}
    >
      <div className="content-grid two-column">
        <section className="panel">
          <div className="panel-header">
            <h3>Asset inventory</h3>
            <span className="muted-link">34 total</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Asset</th>
                  <th>Category</th>
                  <th>Assigned to</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {assetInventory.map((asset) => (
                  <tr key={`${asset.asset}-${asset.assignedTo}`}>
                    <td>{asset.asset}</td>
                    <td>{asset.category}</td>
                    <td>{asset.assignedTo}</td>
                    <td><span className={`status-badge ${asset.status.toLowerCase().replace(/\s+/g, '-')}`}>{asset.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="panel">
          <div className="panel-header">
            <h3>Assign asset</h3>
            <span className="muted-link">Inventory record</span>
          </div>
          <form className="stack-form">
            <label>
              Asset name
              <input type="text" defaultValue="Laptop" />
            </label>
            <label>
              Employee
              <select defaultValue="Asha Verma">
                <option>Asha Verma</option>
                <option>Rohit Mehra</option>
                <option>Imran Khan</option>
              </select>
            </label>
            <label>
              Category
              <select defaultValue="Hardware">
                <option>Hardware</option>
                <option>Accessories</option>
                <option>Communication</option>
              </select>
            </label>
            <button type="button" className="primary-button">Assign asset</button>
          </form>
        </section>
      </div>
    </PageShell>
  );
}
