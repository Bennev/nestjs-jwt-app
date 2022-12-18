import { PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';
import { IsNotEmpty, IsString } from "class-validator";
import { UsersEntity } from 'src/app/users/users.entity';

export class UpdateTicketDto {
  answeredByUser: UsersEntity;

  status: string;

  @IsNotEmpty()
  @IsString()
  nameLocation: string;

  @IsNotEmpty()
  @IsString()
  addressLocation: string;
}
