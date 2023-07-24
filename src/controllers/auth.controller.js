import User from '../models/user.model.js';

export const register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const newUser = new User({
      email,
      password,
      username,
    });

    await newUser.save();
  } catch (error) {
    console.error(error);
  }

  res.send('Register');
};
export const login = (req, res) => res.send('login');
