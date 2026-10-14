import { Router } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import { notReady } from '../db.js';
import { employees } from '../mock.js';
const r = Router();
r.post('/login', (req, res) => {
  if (!config.useMock) return notReady(res); // TODO: look up user in DB, compare hashed password
  const { email, password } = req.body;
  const emp = employees.find((e) => e.email === email);
  if (!emp || password !== 'password123') return res.status(401).json({ error: 'Wrong email or password.' });
  const user = { id: emp.id, name: emp.name, role: emp.role };
  res.json({ token: jwt.sign(user, config.jwtSecret, { expiresIn: '8h' }), user });
});
export default r;
