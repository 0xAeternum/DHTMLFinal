const USERS = require(process.cwd() + '/config/sqlizer').MODELS()['Users'];

exports.create = async (username, email, password, hero_class) => {
  return await USERS.create({
    username: username,
    password: password,
    email: email,
    hero_class: hero_class
  }).then(model => {
    return true;
  }).catch(error => {
    console.log(error);
    return false;
  });
}

exports.get = async (id) => {
  return await USERS.findByPk(id);
}

exports.findByUsername = async (username) => {
  return await USERS.findOne({
    where: {
      username: username
    }
  })
}

exports.all = async () => {
  return await USERS.findAll();
}

exports.top = async () => {

}

exports.update = async (userNew) => {
  let x = await userNew.update({pvpwon: userNew.pvpwon+1}, { where: { id: userNew.id } })
}

exports.addExpPvE = async (id) => {
  let user = await this.get(id)
  user.exp += (user.level * 2)
  await this.update(user);
}

exports.addWin = async (id) => {
  let user = await this.get(id)
  user.pvpwon++
  console.log('add win')
  await this.update(user)
}

exports.addLose = async (id) => {
  let user = await this.get(id)
  user.pvplost++
  await this.update(user)
}

exports.addExp = async (id) => {
  let user = await this.get(id)
  user.exp += (user.level * 5)
  await this.update(user)
}