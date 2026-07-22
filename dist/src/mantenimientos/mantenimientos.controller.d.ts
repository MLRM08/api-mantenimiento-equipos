import { MantenimientosService } from './mantenimientos.service';
import { CreateMantenimientoDto } from './dto/create-mantenimiento.dto';
import { UpdateMantenimientoDto } from './dto/update-mantenimiento.dto';
export declare class MantenimientosController {
    private readonly mantenimientosService;
    constructor(mantenimientosService: MantenimientosService);
    create(createMantenimientoDto: CreateMantenimientoDto): Promise<{
        id: string;
        equipoId: string;
        tecnico: string;
        descripcion: string;
        costo: number;
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
        equipoId: string;
        tecnico: string;
        descripcion: string;
        costo: number;
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
        equipoId: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        fecha: Date;
    }>;
    update(id: string, updateMantenimientoDto: UpdateMantenimientoDto): Promise<{
        id: string;
        equipoId: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        fecha: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        equipoId: string;
        tecnico: string;
        descripcion: string;
        costo: number;
        fecha: Date;
    }>;
}
