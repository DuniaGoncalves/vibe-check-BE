const logger = (req, res, next) => {
  console.log(`Method: ${req.method} Path: ${req.path} Body: ${req.body}`);
  console.log('---')
  next();
};

module.exports = logger;
