
import { IsNotEmpty, IsOptional } from "class-validator";
import { UsersEntity } from 'src/app/users/users.entity';

export class UpdateTicketDto {
  @IsNotEmpty()
  @IsOptional()
  answeredByUser: UsersEntity;

  @IsNotEmpty()
  @IsOptional()
  status: string;

  @IsNotEmpty()
  @IsOptional()
  nameLocation: string;

  @IsNotEmpty()
  @IsOptional()
  addressLocation: string;
}
