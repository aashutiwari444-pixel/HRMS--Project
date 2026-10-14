import pg from 'pg';
export const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
// Used by every route's "else" branch until the real queries are written.
export const notReady = (res) => res.status(501).json({ error: 'Database queries not written yet. Set USE_MOCK_DATA=true.' });
