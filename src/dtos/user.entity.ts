export enum UserRole {
    CLIENT = 'client',
    SELLER = 'seller',
  }
  
  export class User {
    id?: string;
    name: string;
    email: string;
    cpf: string;
    password: string;
    role: UserRole;
    createdAt?: Date;
  }