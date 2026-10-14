import jwt from 'jsonwebtoken';
import config from '../config.js';
export const requireAuth = (req, res, next) => {
  const token = (req.headers.authorization || '').replace('Bearer ', '');
  try { req.user = jwt.verify(token, config.jwtSecret); next(); }
  catch { res.status(401).json({ error: 'Session expired. Please log in again.' }); }
};
// RBAC: allow('hr_admin', 'process_manager')
export const allow = (...roles) => (req, res, next) =>
  roles.includes(req.user.role) ? next() : res.status(403).json({ error: 'You do not have access to this.' });
