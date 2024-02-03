import type { Request, Response } from 'express';
import { mongodb } from '../services/mongodb.service';

class AuthorController {
  public async get(req: Request, res: Response) {
    try {
      const { nickname } = req.params;
      const author = await mongodb.collections.authors?.findOne({
        nickname: nickname,
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
}

export { AuthorController };
