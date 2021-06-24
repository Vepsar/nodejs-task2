import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 30 })
  name: string = '';

  @Column('varchar', { length: 20 })
  login: string = '';

  @Column('varchar', { length: 25, select: false, nullable: true })
  password: string | undefined;
}
