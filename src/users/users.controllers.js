const userService = require('./users.services');

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;
  if (!username || !name || !email || !password) {
    return res.status(400).send({
      message:
        "Some fields are missing.  'username', 'name', 'email' or 'password'",
    });
  }
  const foundEmail = await userService.findByEmailUserService(email);
  const foundUser = await userService.findByUserNameService(username);

  if (foundEmail) {
    return res.status(400).send({
      message: 'This email was already used.',
    });
  }
  if (foundUser) {
    return res.status(400).send({
      message: 'This username was already taken!',
    });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err, message));

  if (!user) {
    return res.status(400).send({
      message: 'Error to create new user!',
    });
  }

  res.status(201).send(user);
};

module.exports = {
    createUserController,
}
