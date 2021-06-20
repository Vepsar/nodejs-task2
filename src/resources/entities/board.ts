import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
// import { Columns } from './column';

@Entity({ name: 'board' })
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 30 })
  title: string = '';

  //   //   @OneToMany()
  @Column('json')
  columns: string;
}
