import { UserEntity } from '~/core/Api/User';

export type IUser = UserEntity & {
  id?: number;
  name: string;
  phone: string;
  email: string;
  birth_date?: string;
  city?: string;
  company?: string;
  photo?: string;
  position?: string;
  sex?: string;
  role: string;
};

export abstract class User implements IUser {
  id?: number;
  name: string;
  phone: string;
  email: string;
  birth_date?: string;
  city?: string;
  company?: string;
  photo?: string;
  position?: string;
  sex: string;

  abstract get role(): string;
  abstract set role(value);
}
