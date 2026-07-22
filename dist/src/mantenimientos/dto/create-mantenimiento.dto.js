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
exports.CreateMantenimientoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMantenimientoDto {
}
exports.CreateMantenimientoDto = CreateMantenimientoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Carlos Mendoza' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMantenimientoDto.prototype, "tecnico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Cambio de filtro de aire' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMantenimientoDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 120.5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateMantenimientoDto.prototype, "costo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'ab94e592-abf4-406d-8b99-e36561e15dea' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateMantenimientoDto.prototype, "equipoId", void 0);
//# sourceMappingURL=create-mantenimiento.dto.js.map