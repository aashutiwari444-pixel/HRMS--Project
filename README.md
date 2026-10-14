# HRMS starter (React + Node/Express + PostgreSQL)

## Run
Backend:  cd backend && npm install && npm run dev      (http://localhost:5000)
Frontend: cd frontend && npm install && npm run dev     (http://localhost:5173)

Demo login: asha@hrms.com / password123 (also rohit, neha, sanjay @hrms.com)

## Mock data -> real database
Every route checks `USE_MOCK_DATA` (backend/.env). When true it uses backend/src/mock.js.
When the DB is ready: write the query in each route's `if (!config.useMock)` branch
(using `pool` from src/db.js), then set USE_MOCK_DATA=false. Frontend does not change.

## Next modules (follow the doc order)
Attendance, Reimbursements, IT Assets, Grievances.
