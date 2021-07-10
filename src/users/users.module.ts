import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { LoginModule } from 'src/login/login.module';
import { TasksModule } from 'src/tasks/tasks.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => LoginModule),
    TasksModule,
  ],
  exports: [TypeOrmModule, UsersService],
})
export class UsersModule {}
