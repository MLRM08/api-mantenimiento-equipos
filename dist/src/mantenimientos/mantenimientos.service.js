"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MantenimientosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MantenimientosService = class MantenimientosService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMantenimientoDto) {
        const { equipoId, tecnico, descripcion, costo } = createMantenimientoDto;
        const equipo = await this.prisma.equipo.findUnique({ where: { id: equipoId } });
        if (!equipo)
            throw new common_1.NotFoundException(`El equipo con ID "${equipoId}" no existe.`);
        return this.prisma.mantenimiento.create({
            data: { tecnico, descripcion, costo, equipoId },
        });
    }
    async findAll() {
        return this.prisma.mantenimiento.findMany({ include: { equipo: true } });
    }
    async findOne(id) {
        const mantenimiento = await this.prisma.mantenimiento.findUnique({
            where: { id },
            include: { equipo: true },
        });
        if (!mantenimiento)
            throw new common_1.NotFoundException(`Mantenimiento no encontrado`);
        return mantenimiento;
    }
    async update(id, updateMantenimientoDto) {
        await this.findOne(id);
        return this.prisma.mantenimiento.update({
            where: { id },
            data: updateMantenimientoDto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.mantenimiento.delete({ where: { id } });
    }
};
exports.MantenimientosService = MantenimientosService;
exports.MantenimientosService = MantenimientosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MantenimientosService);
//# sourceMappingURL=mantenimientos.service.js.map