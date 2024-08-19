import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RoleModule } from './role/role.module';
import { PasswordModule } from './password/password.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    RoleModule,
    PasswordModule,
    UserModule
  ]
})
export class AppModule {}
