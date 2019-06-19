const UserModel = require(process.cwd() + '/models/User');


module.exports.create = async (req, res) => {
  let result = await UserModel.create(req.body.usrReg, req.body.emailReg, req.body.pwdReg)
  if (result) {
    req.flash('regSuccess', 'Successfully created user!');
    res.redirect('/');
    return;
  }
  req.flash('regError', 'Failed to create user.');
  res.redirect('/');
}

module.exports.view = async (req, res) => {

}

module.exports.top = async (req, res) => {
  
}

module.exports.login = async (req, res) => {
  let user = await UserModel.findByUsername(req.body.usrLog)
  if (user != null && user.dataValues.password == req.body.pwdLog && req.body.usrLog == user.dataValues.username) {
    // set up session
    req.session.user = user;

    if (user.dataValues.class == null) {
      console.log('ASD')

      user.dataValues.strength = Math.floor(Math.random() * 5) + 1;
      user.dataValues.intellect = Math.floor(Math.random() * 5) + 1;
      user.dataValues.agility = Math.floor(Math.random() * 5) + 1;

      req.session.user = user

      res.locals.user = user
      
      res.redirect("/class_selection")
    } else {
      res.redirect("/main_page")
    }
  } else {
    req.flash('loginError', 'Invalid username or password')
    res.redirect('/')
  }
}

module.exports.setHeroClass = async (req, res) => {
  req.session.user.class = req.body.selected_class
  UserModel.update(req.session.user)
  res.redirect('/main_page')
}

module.exports.logout = async (req, res) => {
  req.session.user = null
  req.session.destroy()
  res.redirect('/')
}