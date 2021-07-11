import { forwardRef, Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './entities/board.entity';
import { LoginModule } from 'src/login/login.module';
import { TasksModule } from 'src/tasks/tasks.module';
import { HttpExceptionFilter } from 'src/utils/http-exeption.filter';
import { WinstonModule } from 'nest-winston';
import logconfig from 'src/common/logconfig';
import { LoggerInterceptor } from 'src/logger/logger.interceptor';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
  imports: [
    TypeOrmModule.forFeature([Board]),
    forwardRef(() => LoginModule),
    TasksModule,
    HttpExceptionFilter,
    WinstonModule.forRoot(logconfig),
    LoggerInterceptor,
  ],
  exports: [TypeOrmModule],
})
export class BoardsModule {}
