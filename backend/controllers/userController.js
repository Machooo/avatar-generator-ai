const User = require("./../models/User");

async function createUser(email, password, name = "") {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const isUserExist = await User.findOne({ email });

  if (isUserExist) {
    throw new Error("User already created");
  }

  if (password.length < 6) {
    throw new Error("Password is too short");
  }

  await User.create({
    email,
    password,
    name,
    role: "user",
  }).catch((err) => {
    throw new Error(err);
  })
}

async function changePassword() {

}

async function remindPassword() {

}

async function login(email, password) {
  try {
      // Находим пользователя по его электронной почте
      const user = await User.findOne({ email });

      // Проверяем, найден ли пользователь
      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Проверяем, соответствует ли введенный пароль захешированному паролю пользователя
      const isValidPassword = await user.verifyPassword(password);

      if (!isValidPassword) {
        throw new Error('Invalid email or password');
      }

      // Возвращаем информацию о пользователе, если аутентификация прошла успешно
      return user;
  } catch (error) {
    throw new Error('Error during login process: ' + error.message);
  }
}

async function logout() {

}

async function setSubscription() {

}

module.exports = { createUser };
