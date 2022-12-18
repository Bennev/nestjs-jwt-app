import { IsNotEmpty, IsString } from "class-validator";
import { UsersEntity } from "src/app/users/users.entity";

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  createdByUser: UsersEntity;

  @IsNotEmpty()
  @IsString()
  nameLocation: string;

  @IsNotEmpty()
  @IsString()
  addressLocation: string;
}
