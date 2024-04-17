import UserModel from '../domain/User';

export class GetUserById {
  async execute(userId: string) {
    try {
      const user = await UserModel.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Error retrieving user: ' + error.message);
      } else {
        throw new Error('Error retrieving user: An unknown error occurred');
      }
    }
  }
}
