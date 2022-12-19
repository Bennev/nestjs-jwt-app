import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CompanyEntity } from "src/app/companies/entities/company.entity";
import { LocationEntity } from "src/app/locations/entities/location.entity";

export class CreateAccountableDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsOptional()
  company: CompanyEntity;

  @IsNotEmpty()
  @IsOptional()
  location: LocationEntity;
}
