import { User } from '../models/user.model';

const API_URL = 'http://192.168.1.9:3027/users';
const options = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const SignIn = async (userToLogin: User) => {
  const response = await fetch(API_URL, options);
  let users: User[] = await response.json();
  let result: any = {};

  let usersFilters: User[] = users.filter(
    (user: User) =>
      user.email === userToLogin.email &&
      user.password === btoa(userToLogin.password)
  );

  if (usersFilters.length > 0) {
    result = {
      error: false,
      isAuthenticated: true,
      message: '',
      data: usersFilters[0],
    };
  } else {
    result = {
      error: false,
      isAuthenticated: false,
      message: 'Usuario y/o contraseña incorrecta.',
      data: {},
    };
  }

  return result;
};

export { SignIn };
