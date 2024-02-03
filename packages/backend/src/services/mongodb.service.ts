import { type Collection, type Db, MongoClient } from 'mongodb';
import { env } from '../utils';

const collections: { authors?: Collection } = {};

const connectToDb = async () => {
  const mongoClient: MongoClient = new MongoClient(
    env.MONGODB_CONNECTION_STRING as string,
  );
  await mongoClient.connect();
  const db: Db = mongoClient.db(env.MONGODB_DATABASE_NAME as string);
  const authorCollection: Collection = db.collection(
    env.MONGODB_AUTHORS_COLLECTION as string,
  );
  collections.authors = authorCollection;
};

const mongodb = {
  connectToDb,
  collections,
};

export { mongodb };
