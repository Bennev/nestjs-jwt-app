import { IsNotEmpty, IsString } from "class-validator";
import { LocationEntity } from "src/app/locations/entities/location.entity";
import { UsersEntity } from "src/app/users/users.entity";

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

  @IsNotEmpty()
  @IsString()
  userId: string;
}
