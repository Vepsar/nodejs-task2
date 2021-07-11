import * as jwt from 'jsonwebtoken';
import { SECRET_KEY } from 'src/common/config';

const createToken = async (
  id: string | undefined,
  login: string,
): Promise<string> =>
  jwt.sign({ id, login }, String(SECRET_KEY), {
    expiresIn: '15m',
  });

export { createToken };
