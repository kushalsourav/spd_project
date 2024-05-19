const jsonWebToken = require('jsonwebtoken');
const Secret_JWT_TOKEN = 'adsdfsfwewfwe';

const checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (typeof header !== "undefined") {
    jsonWebToken.verify(header, Secret_JWT_TOKEN, (err, authorizedData) => {
        console.log(Secret_JWT_TOKEN, header)
      if (err) {
        res.status(403).json({ error: "Invalid token" });
      } else {
        req.token = authorizedData;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "Authentication required" });
  }
};

module.exports = checkToken;
