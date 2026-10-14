// Fake data used while USE_MOCK_DATA=true. Password for every user: password123
export const employees = [
  { id: 'EMP001', name: 'Asha Verma',   email: 'asha@hrms.com',   role: 'employee',        department: 'Sales',   designation: 'Agent',            teamLeaderId: 'EMP002' },
  { id: 'EMP002', name: 'Rohit Mehra',  email: 'rohit@hrms.com',  role: 'team_leader',     department: 'Sales',   designation: 'Team Leader',      teamLeaderId: null },
  { id: 'EMP003', name: 'Neha Kapoor',  email: 'neha@hrms.com',   role: 'process_manager', department: 'Sales',   designation: 'Process Manager',  teamLeaderId: null },
  { id: 'EMP004', name: 'Sanjay Rao',   email: 'sanjay@hrms.com', role: 'hr_admin',        department: 'HR',      designation: 'HR Manager',       teamLeaderId: null },
  { id: 'EMP005', name: 'Kiran Das',    email: 'kiran@hrms.com',  role: 'finance',         department: 'Finance', designation: 'Accountant',       teamLeaderId: null },
  { id: 'EMP006', name: 'Imran Khan',   email: 'imran@hrms.com',  role: 'it',              department: 'IT',      designation: 'IT Support',       teamLeaderId: null },
];
export const leaves = [
  { id: 1, employeeId: 'EMP001', type: 'Casual', from: '2026-10-20', to: '2026-10-21', reason: 'Family function', status: 'Pending Team Leader' },
];
