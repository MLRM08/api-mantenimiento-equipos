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
exports.EquiposController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const equipos_service_1 = require("./equipos.service");
const create_equipo_dto_1 = require("./dto/create-equipo.dto");
const update_equipo_dto_1 = require("./dto/update-equipo.dto");
let EquiposController = class EquiposController {
    constructor(equiposService) {
        this.equiposService = equiposService;
    }
    create(createEquipoDto) {
        return this.equiposService.create(createEquipoDto);
    }
    findAll() {
        return this.equiposService.findAll();
    }
    findOne(id) {
        return this.equiposService.findOne(id);
    }
    update(id, updateEquipoDto) {
        return this.equiposService.update(id, updateEquipoDto);
    }
    remove(id) {
        return this.equiposService.remove(id);
    }
};
exports.EquiposController = EquiposController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar un nuevo equipo' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_equipo_dto_1.CreateEquipoDto]),
    __metadata("design:returntype", void 0)
], EquiposController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todos los equipos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EquiposController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un equipo por su ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EquiposController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un equipo por su ID' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_equipo_dto_1.UpdateEquipoDto]),
    __metadata("design:returntype", void 0)
], EquiposController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un equipo por su ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EquiposController.prototype, "remove", null);
exports.EquiposController = EquiposController = __decorate([
    (0, swagger_1.ApiTags)('Equipos'),
    (0, common_1.Controller)('equipos'),
    __metadata("design:paramtypes", [equipos_service_1.EquiposService])
], EquiposController);
//# sourceMappingURL=equipos.controller.js.map