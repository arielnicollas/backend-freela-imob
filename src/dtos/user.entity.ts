export enum UserRole {
    CLIENT = 'client',
    SELLER = 'seller',
  }
  
  export class User {
    id?: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt?: Date;
  }