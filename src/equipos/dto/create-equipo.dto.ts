import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export enum EstadoEquipo {
  OPERATIVO = 'OPERATIVO',
  EN_MANTENIMIENTO = 'EN_MANTENIMIENTO',
  BAJA = 'BAJA',
}

export class CreateEquipoDto {
  @ApiProperty({ example: 'Compresor Industrial A1' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ example: 'CMP-2026-001' })
  @IsString()
  @IsNotEmpty()
  codigoSerie: string;

  @ApiProperty({ example: 'Planta Principal - Sector 3' })
  @IsString()
  @IsNotEmpty()
  ubicacion: string;

  @ApiProperty({ example: 'OPERATIVO', enum: EstadoEquipo })
  @IsEnum(EstadoEquipo)
  estado: EstadoEquipo;
}