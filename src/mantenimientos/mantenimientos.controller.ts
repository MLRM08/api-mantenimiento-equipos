import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MantenimientosService } from './mantenimientos.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';

@ApiTags('Mantenimientos')
@Controller('mantenimientos')
export class MantenimientosController {
  constructor(private readonly mantenimientosService: MantenimientosService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo mantenimiento' })
  create(@Body() createMantenimientoDto: CreateMantenimientoDto) {
    return this.mantenimientosService.create(createMantenimientoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los mantenimientos' })
  findAll() {
    return this.mantenimientosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener mantenimiento por ID' })
  findOne(@Param('id') id: string) {
    return this.mantenimientosService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar mantenimiento por ID' })
  update(@Param('id') id: string, @Body() updateMantenimientoDto: UpdateMantenimientoDto) {
    return this.mantenimientosService.update(id, updateMantenimientoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar mantenimiento por ID' })
  remove(@Param('id') id: string) {
    return this.mantenimientosService.remove(id);
  }
}