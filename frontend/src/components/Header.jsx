export default function Header({ user, pageTitle, onLogout }) {
  return (
    <header className="topbar">
      <div className="topbar__title-block">
        <span className="bread-tag">HRMS</span>
        <h2>{pageTitle}</h2>
      </div>

      <div className="topbar__utilities">
        <label className="topbar__search" aria-label="Search">
          <span>⌕</span>
          <input type="search" placeholder="Search employees, records, or tasks" />
        </label>

        <button className="icon-button" aria-label="Notifications">🔔</button>

        <div className="profile-summary">
          <div className="mini-avatar">{user.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()}</div>
          <div>
            <strong>{user.name}</strong>
            <small>{user.role.replace('_', ' ')}</small>
          </div>
        </div>

        <button className="ghost-button" onClick={onLogout}>Log out</button>
      </div>
    </header>
  );
}
