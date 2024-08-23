import { IsOptional, IsString } from 'class-validator';

export class UpdatePasswordDto {
  @IsString()
  @IsOptional()
  readonly salt?: string;

  @IsString()
  @IsOptional()
  readonly hash?: string;
}
