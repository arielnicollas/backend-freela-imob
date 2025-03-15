import { IsEnum, IsString, IsNumber, Min } from 'class-validator';
import { PropertyType } from '../dtos/property.entity';

export class CreatePropertyDto {
  @IsEnum(PropertyType)
  type: PropertyType;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;
}
