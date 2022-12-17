import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  nameLocation: string;

  @IsNotEmpty()
  @IsString()
  addressLocation: string;

  userIdCreated: string;

  userIdAnswered: string;
}
