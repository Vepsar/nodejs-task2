import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksService } from 'src/tasks/tasks.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponceDto } from './dto/user-responce.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private readonly taskService: TasksService,
  ) {}

  async create(
    createUserDto: CreateUserDto,
  ): Promise<UserResponceDto | undefined> {
    const newUser = this.userRepo.create(createUserDto);
    const savedUser = this.userRepo.save(newUser);
    return User.toResponse(await this.userRepo.findOne((await savedUser).id));
  }

  async findAll(): Promise<(UserResponceDto | undefined)[]> {
    const users = await this.userRepo.find({ where: {} });
    const respUsers = users.map(User.toResponse);
    return respUsers;
  }

  async findOne(id: string) {
    return User.toResponse(await this.userRepo.findOne(id));
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponceDto | undefined> {
    const updUser = await this.userRepo.update(id, updateUserDto);
    return User.toResponse(updUser.raw);
  }

  async remove(id: string): Promise<'deleted' | 'not_found'> {
    await this.taskService.deleteUser(id);
    const resp = this.userRepo.findOne(id);
    if (id !== undefined && resp !== undefined) {
      await this.userRepo.delete(id);
      return 'deleted';
    }
    return 'not_found';
  }

  async getUserByLogin(login: string): Promise<User | undefined> {
    const usersarr = await this.userRepo.find({ where: {} });
    const resp = usersarr.find((user) => user.login === login);
    if (resp !== undefined) {
      return resp;
    }
    return undefined;
  }
}
