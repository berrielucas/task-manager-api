import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @MinLength(15)
  @IsOptional()
  readonly description?: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum({
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
  })
  readonly status: string;

  @IsInt()
  @IsNotEmpty()
  readonly category_id: number;
}
