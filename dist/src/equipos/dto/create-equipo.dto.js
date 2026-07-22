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
exports.CreateEquipoDto = exports.EstadoEquipo = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var EstadoEquipo;
(function (EstadoEquipo) {
    EstadoEquipo["OPERATIVO"] = "OPERATIVO";
    EstadoEquipo["EN_MANTENIMIENTO"] = "EN_MANTENIMIENTO";
    EstadoEquipo["BAJA"] = "BAJA";
})(EstadoEquipo || (exports.EstadoEquipo = EstadoEquipo = {}));
class CreateEquipoDto {
}
exports.CreateEquipoDto = CreateEquipoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Compresor Industrial A1' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEquipoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'CMP-2026-001' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEquipoDto.prototype, "codigoSerie", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Planta Principal - Sector 3' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEquipoDto.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'OPERATIVO', enum: EstadoEquipo }),
    (0, class_validator_1.IsEnum)(EstadoEquipo),
    __metadata("design:type", String)
], CreateEquipoDto.prototype, "estado", void 0);
//# sourceMappingURL=create-equipo.dto.js.map