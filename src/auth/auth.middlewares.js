require("dotenv").config();
const jwt = require("jsonwebtoken");
const { findByIdUserService } = require("../users/users.services");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: "Token wasn't informed!" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({ message: "Invalid Token!" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: "Token was badly formated!" });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    

    if (err) {
      return res.status(401).send({ message: "Invalid Token" });
    }

    const user = await findByIdUserService(decoded.id);

    req.userId = user.id;

    return next();
  });
};
