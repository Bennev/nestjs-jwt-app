import { IsNotEmpty, IsString } from "class-validator";
import { LocationEntity } from "src/app/locations/entities/location.entity";

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  cnpj: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  // @IsString()
  location: LocationEntity[];
}
