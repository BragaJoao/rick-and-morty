const userService = require('./users.services');
const authService = require('../auth/auth.services')

const createUserController = async (req, res) => {
  const { name, username, email, password, photo } = req.body;
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

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      name,
      username,
      email,
      photo,
    },
    token,
  });
};

const findAllUserController = async (req, res) => {
  const users = await userService.findAllUserService();

  if (users.length === 0) {
    return res.status(400).send({
      message: 'There is no user registered!',
    });
  }
  res.send(users);
};

module.exports = {
  createUserController,
  findAllUserController,
};
