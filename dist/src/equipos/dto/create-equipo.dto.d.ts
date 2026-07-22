export declare enum EstadoEquipo {
    OPERATIVO = "OPERATIVO",
    EN_MANTENIMIENTO = "EN_MANTENIMIENTO",
    BAJA = "BAJA"
}
export declare class CreateEquipoDto {
    nombre: string;
    codigoSerie: string;
    ubicacion: string;
    estado: EstadoEquipo;
}
