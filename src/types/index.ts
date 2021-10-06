export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  age: number;
}
// string[]

export interface ISettingsSort {
  title: string;
  field: string;
  isActive: boolean;
}
