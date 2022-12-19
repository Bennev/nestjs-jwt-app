import { IsNotEmpty, IsString } from "class-validator";
import { AccountableEntity } from "src/app/accountables/entities/accountable.entity";
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
  user: UsersEntity;

  locations: LocationEntity[];

  accountables: AccountableEntity[];
}
