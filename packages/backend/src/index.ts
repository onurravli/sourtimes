import express, { type Application } from 'express';
import { authorRouter } from './routers';
import { env } from './utils';
import { mongodb } from './services';

const app: Application = express();
const port: number = parseInt(env.PORT as string) || 3001;

async function main() {
  try {
    await mongodb.connectToDb();
    console.log('Connected to MongoDB.');
  } catch (error) {
    console.log('An error occurred while connecting to MongoDB.');
    process.exit(1);
  }
  try {
    app.use(express.json());
    app.use('/author', authorRouter);
    app.listen(port, () => {
      console.log(`Server listening on port ${port}.`);
    });
  } catch (error) {
    console.log('An error occurred while starting application.');
    process.exit(1);
  }
}

main();
