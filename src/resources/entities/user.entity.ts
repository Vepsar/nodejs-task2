import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { length: 30 })
  name: string = '';

  @Column('varchar', { length: 20 })
  login: string = '';

  @Column('varchar', { length: 25 })
  password: string = '';
}
