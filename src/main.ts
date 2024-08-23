import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const port = app.get(ConfigService).get<number>('APP_PORT') || 3000;
  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('KTrek')
    .setDescription('The KTrek API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app
    .listen(port)
    .then(() => console.warn(`\nServer is running on ${'http://localhost:' + port}\n`))
    .catch(() => console.error('\nERROR. Server is not running\n'));
}
bootstrap();
