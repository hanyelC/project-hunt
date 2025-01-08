import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  if (!process.env.PORT) {
    throw new Error('missing required environment variable: PORT');
  }
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
