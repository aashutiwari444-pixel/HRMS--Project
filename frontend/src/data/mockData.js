export const dashboardStats = [
  { label: 'Total employees', value: '248', change: '+12%', tone: 'blue', icon: '👥' },
  { label: 'Present today', value: '214', change: '+6%', tone: 'green', icon: '✅' },
  { label: 'Pending leave', value: '18', change: '-3%', tone: 'amber', icon: '🗓️' },
  { label: 'Pending approvals', value: '09', change: '+2%', tone: 'violet', icon: '🔔' }
];

export const recentActivities = [
  { title: 'New hire approved', detail: 'Priya Sharma joined the HR operations team', time: '12 min ago' },
  { title: 'Leave request approved', detail: 'Rohit Mehra approved 2 days for Asha Verma', time: '1 hr ago' },
  { title: 'Attendance compliance', detail: 'Department-wise attendance is now 96.4%', time: '2 hrs ago' },
  { title: 'Payroll processed', detail: 'Salary cycle for October was released', time: 'Today' }
];

export const employeesDirectory = [
  { id: 'EMP001', name: 'Asha Verma', department: 'Sales', designation: 'Agent', location: 'Bengaluru', phone: '+91 98765 43210', status: 'Active' },
  { id: 'EMP002', name: 'Rohit Mehra', department: 'Sales', designation: 'Team Leader', location: 'Pune', phone: '+91 99887 66121', status: 'Active' },
  { id: 'EMP003', name: 'Neha Kapoor', department: 'Operations', designation: 'Process Manager', location: 'Delhi', phone: '+91 97654 21231', status: 'Active' },
  { id: 'EMP004', name: 'Sanjay Rao', department: 'HR', designation: 'HR Manager', location: 'Hyderabad', phone: '+91 91234 56000', status: 'On leave' },
  { id: 'EMP005', name: 'Kiran Das', department: 'Finance', designation: 'Accountant', location: 'Mumbai', phone: '+91 98988 12345', status: 'Active' },
  { id: 'EMP006', name: 'Imran Khan', department: 'IT', designation: 'IT Support', location: 'Chennai', phone: '+91 99111 33445', status: 'Active' }
];

export const attendanceRecords = [
  { date: '2026-10-14', employee: 'Asha Verma', department: 'Sales', checkIn: '09:15 AM', checkOut: '06:12 PM', status: 'Present' },
  { date: '2026-10-14', employee: 'Rohit Mehra', department: 'Sales', checkIn: '09:00 AM', checkOut: '06:30 PM', status: 'Present' },
  { date: '2026-10-14', employee: 'Neha Kapoor', department: 'Operations', checkIn: '09:10 AM', checkOut: '06:16 PM', status: 'Present' },
  { date: '2026-10-14', employee: 'Sanjay Rao', department: 'HR', checkIn: '--', checkOut: '--', status: 'On leave' },
  { date: '2026-10-14', employee: 'Kiran Das', department: 'Finance', checkIn: '09:02 AM', checkOut: '05:58 PM', status: 'Present' },
  { date: '2026-10-14', employee: 'Imran Khan', department: 'IT', checkIn: '08:46 AM', checkOut: '05:54 PM', status: 'Late' }
];

export const payrollRecords = [
  { employee: 'Asha Verma', month: 'Oct 2026', basic: '₹45,000', bonus: '₹3,000', deductions: '₹1,200', net: '₹46,800', status: 'Processed' },
  { employee: 'Rohit Mehra', month: 'Oct 2026', basic: '₹58,000', bonus: '₹4,500', deductions: '₹1,400', net: '₹61,100', status: 'Processed' },
  { employee: 'Neha Kapoor', month: 'Oct 2026', basic: '₹67,000', bonus: '₹5,200', deductions: '₹1,700', net: '₹70,500', status: 'Pending' },
  { employee: 'Sanjay Rao', month: 'Oct 2026', basic: '₹72,000', bonus: '₹6,000', deductions: '₹2,100', net: '₹75,900', status: 'Processed' }
];

export const assetInventory = [
  { asset: 'Laptop', category: 'Hardware', assignedTo: 'Asha Verma', status: 'Assigned', location: 'Bengaluru' },
  { asset: 'Monitor', category: 'Hardware', assignedTo: 'Rohit Mehra', status: 'Assigned', location: 'Pune' },
  { asset: 'Mobile Phone', category: 'Communication', assignedTo: 'Neha Kapoor', status: 'Assigned', location: 'Delhi' },
  { asset: 'Docking Station', category: 'Accessories', assignedTo: 'Imran Khan', status: 'In maintenance', location: 'Chennai' }
];

export const grievanceList = [
  { title: 'Salary clarification', category: 'Payroll', priority: 'High', status: 'Open', assignee: 'HR Ops' },
  { title: 'Workstation ergonomics', category: 'Facilities', priority: 'Medium', status: 'In review', assignee: 'Operations' },
  { title: 'Shift assignment concern', category: 'Scheduling', priority: 'Low', status: 'Resolved', assignee: 'Manager' }
];

export const reimbursementClaims = [
  { employee: 'Asha Verma', category: 'Travel', amount: '₹4,250', date: '2026-10-06', status: 'Approved' },
  { employee: 'Kiran Das', category: 'Medical', amount: '₹1,880', date: '2026-10-09', status: 'Pending' },
  { employee: 'Imran Khan', category: 'Internet', amount: '₹980', date: '2026-10-11', status: 'Approved' }
];

export const recognitionList = [
  { employee: 'Asha Verma', category: 'Customer Excellence', reward: 'Spot Bonus', date: '2026-10-12' },
  { employee: 'Neha Kapoor', category: 'Leadership', reward: 'Certificate', date: '2026-10-09' },
  { employee: 'Imran Khan', category: 'Innovation', reward: 'Gift Voucher', date: '2026-10-04' }
];

export const learningCourses = [
  { course: 'Leadership Essentials', trainer: 'HR Academy', duration: '4 weeks', progress: '82%', status: 'In progress' },
  { course: 'People Analytics Bootcamp', trainer: 'Learning Team', duration: '3 weeks', progress: '100%', status: 'Completed' },
  { course: 'Cybersecurity Fundamentals', trainer: 'IT Security', duration: '2 weeks', progress: '45%', status: 'In progress' }
];

export const permissionGroups = [
  { name: 'Employee', permissions: ['View profile', 'Submit leave', 'View payslips'] },
  { name: 'Manager', permissions: ['Approve leave', 'Review attendance', 'Manage team records'] },
  { name: 'HR Admin', permissions: ['Edit employee records', 'Manage payouts', 'Configure policies'] }
];

export const orgSettings = {
  company: 'Northstar Enterprises', timezone: 'UTC+05:30', workWeek: 'Mon - Sat', leavePolicy: '12 days annual leave' 
};
