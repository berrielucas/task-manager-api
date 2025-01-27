import {
  IsString,
  MaxLength,
  MinLength,
  IsNotEmpty,
  IsOptional,
  IsEnum,
  ValidateIf,
  IsDefined,
  IsNumber,
} from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  @IsNotEmpty()
  @IsOptional()
  readonly title?: string;

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
  @IsOptional()
  readonly status?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  readonly category_id?: number;

  @ValidateIf((o) => !o.title && !o.description && !o.status && !o.category_id)
  @IsDefined({ message: 'At least one field must be submitted.' })
  readonly atLeastOneField?: boolean;
}
