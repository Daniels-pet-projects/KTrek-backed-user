export interface IPassword {
  id: string;
  salt: string;
  hash: string;
  userId: string;
}
