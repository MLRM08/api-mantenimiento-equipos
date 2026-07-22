import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';

@Injectable()
export class MantenimientosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createMantenimientoDto: CreateMantenimientoDto) {
    const { equipoId, tecnico, descripcion, costo } = createMantenimientoDto;
    const equipo = await this.prisma.equipo.findUnique({ where: { id: equipoId } });
    if (!equipo) throw new NotFoundException(`El equipo con ID "${equipoId}" no existe.`);

    return this.prisma.mantenimiento.create({
      data: { tecnico, descripcion, costo, equipoId },
    });
  }

  async findAll() {
    return this.prisma.mantenimiento.findMany({ include: { equipo: true } });
  }

  async findOne(id: string) {
    const mantenimiento = await this.prisma.mantenimiento.findUnique({
      where: { id },
      include: { equipo: true },
    });
    if (!mantenimiento) throw new NotFoundException(`Mantenimiento no encontrado`);
    return mantenimiento;
  }

  async update(id: string, updateMantenimientoDto: UpdateMantenimientoDto) {
    await this.findOne(id);
    return this.prisma.mantenimiento.update({
      where: { id },
      data: updateMantenimientoDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.mantenimiento.delete({ where: { id } });
  }
}