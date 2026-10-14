import 'dotenv/config';
export default {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'dev-secret',
  useMock: process.env.USE_MOCK_DATA !== 'false',
};
