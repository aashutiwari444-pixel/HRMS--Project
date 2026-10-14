import { NavLink } from 'react-router-dom';

function getRoleAccess(roles, userRole) {
  return roles.includes('all') || roles.includes(userRole);
}

export default function Sidebar({ user, navGroups }) {
  return (
    <aside className="sidebar">
      <div className="brand-block">
        <div className="brand-mark">H</div>
        <div>
          <p className="brand-label">Northstar</p>
          <strong>HRMS</strong>
        </div>
      </div>

      <div className="nav-groups">
        {navGroups.map((group) => {
          const visibleItems = group.items.filter((item) => getRoleAccess(item.roles, user.role));
          if (!visibleItems.length) return null;

          return (
            <div className="nav-group" key={group.title}>
              <p className="nav-group-title">{group.title}</p>
              <nav className="nav-list">
                {visibleItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === '/dashboard'}
                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          );
        })}
      </div>

      <div className="sidebar-profile">
        <div className="avatar-circle">{user.name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase()}</div>
        <div>
          <strong>{user.name}</strong>
          <small>{user.role.replace('_', ' ')}</small>
        </div>
      </div>
    </aside>
  );
}
