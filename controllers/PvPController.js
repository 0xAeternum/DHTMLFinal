module.exports.addGame = async (req, res) => {
  res.render('pvp', {player: req.session.user})
}