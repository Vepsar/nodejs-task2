import { createToken } from '../../utils/authmiddle';
import { chechHash } from '../../utils/hashmiddle';
import { getUserByLogin } from '../users/user.service';

const getToken = async (
  login: string,
  password: string
): Promise<string | undefined> => {
  const user = await getUserByLogin(login);
  if (user !== undefined) {
    const { id, login } = user;
    const { password: hashPassword } = user;
    const compare = await chechHash(password, hashPassword);
    if (compare) {
      const token: string = await createToken(id, login);
      return token;
    }
  }
  return undefined;
};

export { getToken };
