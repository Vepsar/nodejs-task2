import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'colmn' })
export class Columns extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 30 })
  title: string = '';

  @Column('integer')
  order: number = 0;
}
