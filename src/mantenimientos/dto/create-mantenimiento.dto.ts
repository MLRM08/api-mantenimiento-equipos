import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateMantenimientoDto {
  @ApiProperty({ example: 'Carlos Mendoza' })
  @IsString()
  @IsNotEmpty()
  tecnico: string;

  @ApiProperty({ example: 'Cambio de filtro de aire' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({ example: 120.5 })
  @IsNumber()
  @IsPositive()
  costo: number;

  @ApiProperty({ example: 'ab94e592-abf4-406d-8b99-e36561e15dea' })
  @IsString()
  @IsNotEmpty()
  equipoId: string;
}