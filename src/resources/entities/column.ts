import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'colmn' })
export class Columns extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 30 })
  title: string = '';

  @Column('varchar', { length: 20 })
  order: number = 0;
}
