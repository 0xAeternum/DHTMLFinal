module.exports.startGame = async (req, res) => {
  res.render('dungeon', {player: req.session.user})
}