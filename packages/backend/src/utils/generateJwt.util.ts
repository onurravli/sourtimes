import * as jwt from 'jsonwebtoken';
import { env } from './env.util';

const generateJwt = ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const token = jwt.sign(
    {
      username,
      email,
      password,
    },
    env.JWT_SECRET_KEY as string,
    {
      expiresIn: '7d',
    },
  );
  return token;
};

export { generateJwt };
