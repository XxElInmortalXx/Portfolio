import jwt from 'jsonwebtoken'

export const createJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d"
});
}

export const verifyJWT = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
}

export const decodeJWT = (token) => {
  return jwt.decode(token);
}