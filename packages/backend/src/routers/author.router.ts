import { AuthorController } from '../controllers/author.controller';
import { Router } from 'express';

const authorRouter: Router = Router();
const authorController: AuthorController = new AuthorController();

authorRouter.get('/:username', authorController.get);
authorRouter.post('/', authorController.post);
authorRouter.delete('/:username', authorController.delete);

export { authorRouter };
