const jwt = require('jsonwebtoken');

const authenticated = (req, res, next) => {
  try {
    const token = req.header('x-api-key');
    if (!token) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) {
      return res.status(401).send({ message: 'Unauthorized' });
    }

    req.user = verified;

    return next();
  } catch (error) {
    return res.status(401).send({ message: 'Unauthorized' });
  }
};

module.exports = {
  authenticated,
};
