import { forwardRef, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { LoginModule } from 'src/login/login.module';
import { HttpExceptionFilter } from 'src/utils/http-exeption.filter';
import { WinstonModule } from 'nest-winston';
import logconfig from 'src/common/logconfig';
import { LoggerInterceptor } from 'src/logger/logger.interceptor';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
  imports: [
    TypeOrmModule.forFeature([Task]),
    forwardRef(() => LoginModule),
    HttpExceptionFilter,
    WinstonModule.forRoot(logconfig),
    LoggerInterceptor,
  ],
  exports: [TypeOrmModule, TasksService],
})
export class TasksModule {}
