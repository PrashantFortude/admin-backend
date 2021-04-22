import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import 'dotenv/config'

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);

  Logger.log(`Server is starting on http://localhost/${port}`, 'Bootstrap')
}
bootstrap();


// import { ClientProxyFactory, Transport } from '@nestjs/microservices';

// const client = ClientProxyFactory.create({ transport: Transport.TCP });

// client.send('GET:AllStudent', { page: 1, count: 2 }).subscribe((res: any) => {
//   console.log(res);
// })
