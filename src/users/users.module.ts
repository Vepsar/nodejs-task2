import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { LoginModule } from 'src/login/login.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { HttpExceptionFilter } from 'src/utils/http-exeption.filter';
import { WinstonModule } from 'nest-winston';
import logconfig from 'src/common/logconfig';
import { LoggerInterceptor } from 'src/logger/logger.interceptor';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => LoginModule),
    TasksModule,
    HttpExceptionFilter,
    WinstonModule.forRoot(logconfig),
    LoggerInterceptor,
  ],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
