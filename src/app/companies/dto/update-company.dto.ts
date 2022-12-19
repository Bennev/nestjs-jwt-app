import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCompanyDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  cnpj: string;

  @IsNotEmpty()
  @IsOptional()
  description: string;
}
