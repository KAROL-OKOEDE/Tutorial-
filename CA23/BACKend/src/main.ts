import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors());
  const staticAssets = join(__dirname, '..', 'build');
  app.useStaticAssets(staticAssets);
  await app.listen(3003);
}
bootstrap();
