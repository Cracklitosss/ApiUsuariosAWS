import UserModel from '../domain/User';

export class GetAllUsers {
  async execute() {
    try {
      const users = await UserModel.find({});
      return users;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Error retrieving users: ' + error.message);
      } else {
        throw new Error('Error retrieving users: An unknown error occurred');
      }
    }
  }
}
