import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';

@Injectable()
export class EquiposService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEquipoDto: CreateEquipoDto) {
    return this.prisma.equipo.create({ data: createEquipoDto });
  }

  async findAll() {
    return this.prisma.equipo.findMany({ include: { mantenimientos: true } });
  }

  async findOne(id: string) {
    const equipo = await this.prisma.equipo.findUnique({
      where: { id },
      include: { mantenimientos: true },
    });
    if (!equipo) throw new NotFoundException(`Equipo con ID "${id}" no encontrado`);
    return equipo;
  }

  async update(id: string, updateEquipoDto: UpdateEquipoDto) {
    await this.findOne(id);
    return this.prisma.equipo.update({
      where: { id },
      data: updateEquipoDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.equipo.delete({ where: { id } });
  }
}