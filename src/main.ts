import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users/users.module';

async function bootstrap() {
  const users = await NestFactory.create(UsersModule);
  await users.listen(3000);
}
bootstrap();
