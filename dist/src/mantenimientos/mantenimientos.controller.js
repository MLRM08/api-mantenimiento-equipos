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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MantenimientosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const mantenimientos_service_1 = require("./mantenimientos.service");
const create_mantenimiento_dto_1 = require("./dto/create-mantenimiento.dto");
const update_mantenimiento_dto_1 = require("./dto/update-mantenimiento.dto");
let MantenimientosController = class MantenimientosController {
    constructor(mantenimientosService) {
        this.mantenimientosService = mantenimientosService;
    }
    create(createMantenimientoDto) {
        return this.mantenimientosService.create(createMantenimientoDto);
    }
    findAll() {
        return this.mantenimientosService.findAll();
    }
    findOne(id) {
        return this.mantenimientosService.findOne(id);
    }
    update(id, updateMantenimientoDto) {
        return this.mantenimientosService.update(id, updateMantenimientoDto);
    }
    remove(id) {
        return this.mantenimientosService.remove(id);
    }
};
exports.MantenimientosController = MantenimientosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar un nuevo mantenimiento' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mantenimiento_dto_1.CreateMantenimientoDto]),
    __metadata("design:returntype", void 0)
], MantenimientosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los mantenimientos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MantenimientosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener mantenimiento por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MantenimientosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar mantenimiento por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mantenimiento_dto_1.UpdateMantenimientoDto]),
    __metadata("design:returntype", void 0)
], MantenimientosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar mantenimiento por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MantenimientosController.prototype, "remove", null);
exports.MantenimientosController = MantenimientosController = __decorate([
    (0, swagger_1.ApiTags)('Mantenimientos'),
    (0, common_1.Controller)('mantenimientos'),
    __metadata("design:paramtypes", [mantenimientos_service_1.MantenimientosService])
], MantenimientosController);
//# sourceMappingURL=mantenimientos.controller.js.map