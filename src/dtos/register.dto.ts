import { IsEmail, IsString, IsEnum, MinLength } from 'class-validator';
import { UserRole } from '../dtos/user.entity';

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  telephone: string;

  @IsString()
  birthDate: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}