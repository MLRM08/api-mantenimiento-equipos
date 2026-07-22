import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@ApiTags('Equipos')
@Controller('equipos')
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo equipo' })
  create(@Body() createEquipoDto: CreateEquipoDto) {
    return this.equiposService.create(createEquipoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  findAll() {
    return this.equiposService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por su ID' })
  findOne(@Param('id') id: string) {
    return this.equiposService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un equipo por su ID' })
  update(@Param('id') id: string, @Body() updateEquipoDto: UpdateEquipoDto) {
    return this.equiposService.update(id, updateEquipoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo por su ID' })
  remove(@Param('id') id: string) {
    return this.equiposService.remove(id);
  }
}