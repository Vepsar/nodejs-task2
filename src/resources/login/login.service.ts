import * as jwt from 'jsonwebtoken';
import { getUserByLogin } from '../users/user.service';

const getToken = async (
  login: string,
  _password: string
): Promise<string | undefined> => {
  const user = await getUserByLogin(login);
  if (user !== undefined) {
    const { id, login } = user;
    const token: string = jwt.sign(
      { id, login },
      `${process.env['SECRET_KEY']}`,
      { expiresIn: '5m' }
    );
    return token;
  }
  return undefined;
};

export { getToken };
