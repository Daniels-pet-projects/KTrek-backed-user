import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';
import { PasswordController } from './password.controller';
import { Password } from './password.entity';
import { PasswordService } from './password.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Password])],
  controllers: [PasswordController],
  providers: [PasswordService],
  exports: []
})
export class PasswordModule {}
