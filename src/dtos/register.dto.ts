import { IsEmail, IsString, IsEnum, MinLength, MaxLength, IsOptional, Matches} from 'class-validator';
import { UserRole } from '../dtos/user.entity';

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  telephone: string;

  @IsString()
  @IsOptional()
  @MaxLength(11, { message: 'O CPF deve conter apenas 11 caracteres' })
  @Matches(/^\d{11}$/, { message: 'O CPF deve conter apenas números' })
  cpf: string;

  @IsString()
  @IsOptional()
  birthDate: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(UserRole)
  role: UserRole;
}