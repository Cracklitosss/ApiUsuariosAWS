import { IUser } from './User';

export interface IUserRepository {
  create(user: IUser): Promise<IUser>;
  findById(userId: string): Promise<IUser | null>;
  findAll(): Promise<IUser[]>;
  update(userId: string, user: IUser): Promise<IUser | null>;
  deleteById(userId: string): Promise<IUser | null>;
}
