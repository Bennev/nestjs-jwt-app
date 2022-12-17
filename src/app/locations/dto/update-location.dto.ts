import { IsNotEmpty, IsString } from "class-validator";

export class UpdateLocationDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  address: string;
}
