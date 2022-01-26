import { IUser } from '../redux/interfaces';

export interface IItem {
    title: string;
    userName: string;
    onPress(): void;
  }

  export interface IList {
    item: IUser;
  }
  