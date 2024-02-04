import type { ObjectId } from 'mongodb';

class Author {
  constructor(
    public _id: ObjectId,
    public username: string,
    public email: string,
    public password: string,
    public entries: ObjectId[], // TODO: Will be an array of Entry model
    public isVerified: boolean,
    public isNoob: boolean,
  ) {
    this._id = _id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.entries = entries;
    this.isVerified = isVerified;
    this.isNoob = isNoob;
  }
}

export { Author };
