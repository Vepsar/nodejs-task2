import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  BeforeInsert,
} from 'typeorm';
import { createHash } from '../../utils/hashmiddle';
import { IUserResp } from '../../utils/types';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @BeforeInsert()
  async hashpass() {
    this.password = await createHash(this.password);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 30 })
  name: string = '';

  @Column('varchar', { length: 20 })
  login: string = '';

  @Column('text', { nullable: true })
  password: string | undefined;

  static toResponse(user: User): IUserResp {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
