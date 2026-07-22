import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EquiposModule } from './equipos/equipos.module';
import { MantenimientosModule } from './mantenimientos/mantenimientos.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // <-- Carga las variables .env globalmente
    PrismaModule,
    EquiposModule,
    MantenimientosModule,
  ],
})
export class AppModule {}