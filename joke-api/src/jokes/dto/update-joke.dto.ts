import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class UpdateJokeDto {
  @ApiPropertyOptional({ example: 'Updated title' })
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Title should not be empty' })
  title?: string;

  @ApiPropertyOptional({ example: 'Updated punchline!' })
  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'Content should not be empty' })
  content?: string;
}