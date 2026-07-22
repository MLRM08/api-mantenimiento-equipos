import { PrismaService } from '../prisma/prisma.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
export declare class MantenimientosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createMantenimientoDto: CreateMantenimientoDto): Promise<{
        id: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        equipoId: string;
        fecha: Date;
    }>;
    findAll(): Promise<({
        equipo: {
            nombre: string;
            codigoSerie: string;
            ubicacion: string;
            estado: import(".prisma/client").$Enums.EstadoEquipo;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        equipoId: string;
        fecha: Date;
    })[]>;
    findOne(id: string): Promise<{
        equipo: {
            nombre: string;
            codigoSerie: string;
            ubicacion: string;
            estado: import(".prisma/client").$Enums.EstadoEquipo;
            id: string;
            createdAt: Date;
            updatedAt: Date;
        };
    } & {
        id: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        equipoId: string;
        fecha: Date;
    }>;
    update(id: string, updateMantenimientoDto: UpdateMantenimientoDto): Promise<{
        id: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        equipoId: string;
        fecha: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        equipoId: string;
        fecha: Date;
    }>;
}
