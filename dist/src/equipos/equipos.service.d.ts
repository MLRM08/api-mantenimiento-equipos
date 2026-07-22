import { PrismaService } from '../prisma/prisma.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
export declare class EquiposService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEquipoDto: CreateEquipoDto): Promise<{
        nombre: string;
        codigoSerie: string;
        ubicacion: string;
        estado: import(".prisma/client").$Enums.EstadoEquipo;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        mantenimientos: {
            id: string;
            tecnico: string;
            descripcion: string;
            costo: number;
            equipoId: string;
            fecha: Date;
        }[];
    } & {
        nombre: string;
        codigoSerie: string;
        ubicacion: string;
        estado: import(".prisma/client").$Enums.EstadoEquipo;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        mantenimientos: {
            id: string;
            tecnico: string;
            descripcion: string;
            costo: number;
            equipoId: string;
            fecha: Date;
        }[];
    } & {
        nombre: string;
        codigoSerie: string;
        ubicacion: string;
        estado: import(".prisma/client").$Enums.EstadoEquipo;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateEquipoDto: UpdateEquipoDto): Promise<{
        nombre: string;
        codigoSerie: string;
        ubicacion: string;
        estado: import(".prisma/client").$Enums.EstadoEquipo;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        nombre: string;
        codigoSerie: string;
        ubicacion: string;
        estado: import(".prisma/client").$Enums.EstadoEquipo;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
