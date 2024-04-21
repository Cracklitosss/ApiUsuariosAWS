import { IUserRepository } from '../../domain/IUserRepository';
import UserModel, { IUser } from '../../domain/User';

export class UserRepositoryMongo implements IUserRepository {
  async create(user: IUser): Promise<IUser> {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  }

  async findById(userId: string): Promise<IUser | null> {
    return UserModel.findById(userId);
  }

  async findAll(): Promise<IUser[]> {
    return UserModel.find();
  }

  async update(userId: string, user: IUser): Promise<IUser | null> {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, user, { new: true });
    return updatedUser;
  }

  async deleteById(userId: string): Promise<IUser | null> {
    return UserModel.findByIdAndDelete(userId);
  }
}
