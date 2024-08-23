import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePasswordDto {
  @IsString()
  @IsNotEmpty()
  readonly salt: string;

  @IsString()
  @IsNotEmpty()
  readonly hash: string;

  @IsString()
  @IsNotEmpty()
  readonly userId: string;
}
