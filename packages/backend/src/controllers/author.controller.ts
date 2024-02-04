import type { Request, Response } from 'express';
import { hashPassword } from '../utils';
import { mongodb } from '../services/mongodb.service';

class AuthorController {
  public async get(req: Request, res: Response) {
    try {
      const { username } = req.params;
      const author = await mongodb.collections.authors?.findOne({
        username: username,
      });
      if (author) {
        return res.status(200).json(author);
      }
      return res.status(404).json({
        error: "Author doesn't exist.",
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occurred.',
        detail: error,
      });
    }
  }
  public async post(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const isUsernameInUse = await mongodb.collections.authors?.findOne({
        username: username,
      });
      if (isUsernameInUse) {
        return res.status(409).json({
          error: 'This username is taken.',
        });
      }
      const isMailInUse = await mongodb.collections.authors?.findOne({
        email: email,
      });
      if (isMailInUse) {
        return res.status(409).json({
          error: 'This e-mail address is in use.',
        });
      }
      const hashedPassword = await hashPassword(password);
      await mongodb.collections.authors?.insertOne({
        username: username,
        email: email,
        password: hashedPassword,
        entries: [],
        isVerified: false,
      });
      return res.status(201).json({
        message: 'Author created successfully.',
      });
    } catch (error) {
      return res.status(500).json({
        error: 'An error occurred.',
        detail: error,
      });
    }
  }
}

export { AuthorController };
