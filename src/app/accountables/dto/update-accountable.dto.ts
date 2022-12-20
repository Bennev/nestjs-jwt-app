import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateAccountableDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  phone: string;

  @IsNotEmpty()
  @IsOptional()
  address: string;
}
