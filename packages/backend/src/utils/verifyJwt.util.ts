import * as jwt from 'jsonwebtoken';
import { env } from './env.util';

const verifyJwt = (token: string) => {
  try {
    const verified = jwt.verify(token, env.JWT_PRIVATE_KEY as string) as {
      username: string;
      email: string;
      password: string;
    };
    return verified;
  } catch (error) {
    return null;
  }
};

export { verifyJwt };
