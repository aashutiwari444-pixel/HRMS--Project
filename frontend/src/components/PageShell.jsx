export default function PageShell({ title, subtitle, actions, children, toolbar }) {
  return (
    <div className="page-shell">
      <div className="page-header-row">
        <div>
          <p className="eyebrow">HRMS overview</p>
          <h1>{title}</h1>
          {subtitle && <p className="page-subtitle">{subtitle}</p>}
        </div>
        {actions && <div className="page-actions">{actions}</div>}
      </div>
      {toolbar && <div className="page-toolbar">{toolbar}</div>}
      {children}
    </div>
  );
}
