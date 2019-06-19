module.exports.welcome = async (req, res) => {
  res.locals.user = req.session.user
  res.render('main_page')
}

module.exports.classSelection = async (req, res) => {
  res.locals.user = req.session.user
  res.render('class_selection')
}