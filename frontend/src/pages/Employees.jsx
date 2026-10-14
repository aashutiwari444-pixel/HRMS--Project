import { useEffect, useMemo, useState } from 'react';
import { api } from '../api.js';
import PageShell from '../components/PageShell.jsx';

export default function Employees() {
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api('/employees')
      .then((data) => {
        setRows(data);
        setSelected(data[0] || null);
      })
      .catch((e) => setError(e.message));
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter((employee) => `${employee.name} ${employee.department} ${employee.designation}`.toLowerCase().includes(term));
  }, [query, rows]);

  return (
    <PageShell
      title="Employee Management"
      subtitle="Maintain a complete overview of your workforce, hiring pipeline, and team information."
      actions={<button className="primary-button">Add employee</button>}
      toolbar={
        <div className="row">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search employee by name, department, or role"
            style={{ minWidth: 280, flex: 1 }}
          />
        </div>
      }
    >
      {error && <p className="error">{error}</p>}

      <div className="content-grid two-column">
        <section className="panel">
          <div className="panel-header">
            <h3>Employee directory</h3>
            <span className="muted-link">{filtered.length} records</span>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((employee) => (
                  <tr key={employee.id} onClick={() => setSelected(employee)} className={selected?.id === employee.id ? 'selected-row' : ''}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.department}</td>
                    <td>{employee.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="panel">
          <div className="panel-header">
            <h3>Employee details</h3>
            <span className="muted-link">Profile</span>
          </div>
          {selected ? (
            <div className="detail-stack">
              <div className="detail-row">
                <span>Name</span>
                <strong>{selected.name}</strong>
              </div>
              <div className="detail-row">
                <span>Role</span>
                <strong>{selected.designation}</strong>
              </div>
              <div className="detail-row">
                <span>Department</span>
                <strong>{selected.department}</strong>
              </div>
              <div className="detail-row">
                <span>Email</span>
                <strong>{selected.email || 'Not available'}</strong>
              </div>
              <form className="stack-form" style={{ marginTop: 12 }}>
                <label>
                  Title
                  <input type="text" defaultValue={selected.designation} />
                </label>
                <label>
                  Department
                  <input type="text" defaultValue={selected.department} />
                </label>
                <button type="button" className="primary-button">Save changes</button>
              </form>
            </div>
          ) : (
            <p className="muted-link">No employee selected.</p>
          )}
        </aside>
      </div>
    </PageShell>
  );
}
