import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS para que la API pueda ser consumida desde cualquier cliente/frontend
  app.enableCors();

  // Validaciones globales
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // Convierte tipos automáticamente en los DTOs
    }),
  );

  // Swagger Config
  const config = new DocumentBuilder()
    .setTitle('API Gestión de Equipos y Mantenimientos')
    .setDescription('API RESTful con NestJS, Prisma 7 y Supabase')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.setup('api/docs', app, () =>
    SwaggerModule.createDocument(app, config),
  );

  // Usar el puerto de la variable de entorno de Render/Railway o 3000 por defecto
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Aplicación corriendo en: http://localhost:${port}/api/docs`);
}
bootstrap();