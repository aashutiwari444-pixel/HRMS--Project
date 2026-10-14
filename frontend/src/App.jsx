import { useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Employees from './pages/Employees.jsx';
import Leave from './pages/Leave.jsx';
import Attendance from './pages/Attendance.jsx';
import Payroll from './pages/Payroll.jsx';
import Assets from './pages/Assets.jsx';
import Grievances from './pages/Grievances.jsx';
import Reimbursements from './pages/Reimbursements.jsx';
import Recognition from './pages/Recognition.jsx';
import Learning from './pages/Learning.jsx';
import Settings from './pages/Settings.jsx';

const NAV_GROUPS = [
  {
    title: 'Overview',
    items: [
      { to: '/dashboard', label: 'Dashboard', icon: '◫', roles: ['employee', 'team_leader', 'process_manager', 'hr_admin', 'finance', 'it'] },
    ],
  },
  {
    title: 'People',
    items: [
      { to: '/employees', label: 'Employees', icon: '👥', roles: ['team_leader', 'process_manager', 'hr_admin', 'finance', 'it'] },
      { to: '/attendance', label: 'Attendance', icon: '🗓️', roles: ['employee', 'team_leader', 'process_manager', 'hr_admin', 'finance', 'it'] },
      { to: '/leave', label: 'Leave', icon: '✈', roles: ['employee', 'team_leader', 'process_manager', 'hr_admin'] },
    ],
  },
  {
    title: 'Operations',
    items: [
      { to: '/payroll', label: 'Payroll', icon: '₹', roles: ['finance', 'hr_admin', 'process_manager'] },
      { to: '/assets', label: 'IT Assets', icon: '💻', roles: ['it', 'hr_admin', 'process_manager'] },
      { to: '/grievances', label: 'Grievances', icon: '⚑', roles: ['employee', 'team_leader', 'process_manager', 'hr_admin'] },
      { to: '/reimbursements', label: 'Reimbursements', icon: '🧾', roles: ['employee', 'finance', 'hr_admin'] },
    ],
  },
  {
    title: 'Growth',
    items: [
      { to: '/recognition', label: 'Recognition', icon: '🏆', roles: ['employee', 'team_leader', 'process_manager', 'hr_admin'] },
      { to: '/learning', label: 'Learning', icon: '📚', roles: ['employee', 'team_leader', 'process_manager', 'hr_admin', 'it'] },
      { to: '/settings', label: 'Settings', icon: '⚙️', roles: ['hr_admin', 'process_manager'] },
    ],
  },
];

const PAGE_TITLES = {
  '/dashboard': 'Dashboard',
  '/employees': 'Employee Management',
  '/attendance': 'Attendance Management',
  '/leave': 'Leave Management',
  '/payroll': 'Payroll and Salary',
  '/assets': 'IT Assets Management',
  '/grievances': 'Employee Grievances',
  '/reimbursements': 'Employee Reimbursements',
  '/recognition': 'Recognition and Rewards',
  '/learning': 'Learning and Development',
  '/settings': 'Settings and Administration',
};

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const location = useLocation();
  const pageTitle = PAGE_TITLES[location.pathname] || 'Overview';

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="app-shell">
      <Sidebar user={user} navGroups={NAV_GROUPS} />
      <div className="workspace-shell">
        <Header user={user} pageTitle={pageTitle} onLogout={logout} />
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave user={user} />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/grievances" element={<Grievances />} />
            <Route path="/reimbursements" element={<Reimbursements />} />
            <Route path="/recognition" element={<Recognition />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
