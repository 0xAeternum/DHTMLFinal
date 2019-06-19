module.exports.authorization = (req, res, next) => {
  if (req.session.user == null || req.session.user == undefined) {
    res.redirect('/')
    res.end();
    return;
  };
  next();
}