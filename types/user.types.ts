export interface IUser {
  id: number;
  username: string;
  email: string;
  admin: boolean;
  verifiedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  profileConfiguration: IProfileConfiguration;
}

export interface IProfileConfiguration {
  displayName: string;
  bio?: string;
  avatar?: IProfileAvatar;
  instagram?: string;
  facebook?: string;
}

export interface IProfileAvatar {
  uri: string;
}
