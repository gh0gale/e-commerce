// /utils/generateToken.js
import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET || 'yourSecretKey',
    { expiresIn: '7d' }
  );
};
