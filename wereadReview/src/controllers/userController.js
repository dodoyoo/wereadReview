const userService = require('../services/userService');
const { catchAsync } = require('../utils/errorHandle');

const signUp = catchAsync(async (req, res) => {
  const { nickname, email, password } = req.body;
  await userService.signUp(nickname, email, password);

  res.status(201).json({ message: 'Create user' });
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const acceessToken = await userService.signIn(email, password);

  res.status(201).json({ accessToken: acceessToken });
});

module.exports = { signUp, signIn };
