import { Request } from './Request';

export type UserEntity = {
  role: string;
};

export abstract class User<
  User extends UserEntity,
  UserFail,
  RequestConfig
> extends Request<User, UserFail, RequestConfig> {}
