import UserModel from '../domain/User';

export class DeleteUser {
  async execute(userId: string) {
    try {
      const result = await UserModel.findByIdAndDelete(userId);
      if (!result) {
        throw new Error('User not found');
      }
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error('Error deleting user: ' + error.message);
      } else {
        throw new Error('Error deleting user: An unknown error occurred');
      }
    }
  }
}
