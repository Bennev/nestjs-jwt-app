import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
