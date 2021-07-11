import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from './common/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';
import { WinstonModule } from 'nest-winston';
import logconfig from './common/logconfig';

async function bootstrap() {
  var app;
  if (USE_FASTIFY === 'true') {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({
        logger: true,
      }),
    );
  } else {
    app = await NestFactory.create(AppModule, {
      logger: WinstonModule.createLogger(logconfig),
    });
  }

  const config = new DocumentBuilder()
    .setTitle('NEST_APP')
    .setDescription('RSS Nestjs app')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/doc', app, document);

  await app.listen(Number(PORT), '0.0.0.0');
  console.log(
    `${
      USE_FASTIFY === 'true' ? 'Fastify' : 'Express'
    } App is running on localhost:${PORT}`,
  );
}
bootstrap();
