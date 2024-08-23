export interface IUser {
  id: string;
  showedId: string;
  email: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  roleId: string;
}
