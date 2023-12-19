import jwt from "jsonwebtoken";

const onlyDecodeJWT = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.headers.authorization = decoded;
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized");
      }
    } else {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export { onlyDecodeJWT };
