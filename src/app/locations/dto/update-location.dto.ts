import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateLocationDto {
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  address: string;
}
