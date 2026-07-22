import { EquiposService } from './equipos.service';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
export declare class EquiposController {
    private readonly equiposService;
    constructor(equiposService: EquiposService);
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
            equipoId: string;
            tecnico: string;
            descripcion: string;
            costo: number;
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
            equipoId: string;
            tecnico: string;
            descripcion: string;
            costo: number;
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
