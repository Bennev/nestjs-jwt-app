import { IsNotEmpty, IsString } from "class-validator";
import { CompanyEntity } from "src/app/companies/entities/company.entity";

export class CreateLocationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  company: CompanyEntity[];
}
