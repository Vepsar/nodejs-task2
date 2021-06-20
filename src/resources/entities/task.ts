import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'task' })
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 30 })
  title: string = 'title';

  @Column('integer')
  order: Number = 0;

  @Column('varchar', { length: 200 })
  description: string = 'descrp';

  @Column('varchar', { length: 50 })
  userId: string = 'uid';

  @Column('varchar', { length: 50 })
  boardId: string = 'bid';

  @Column('varchar', { length: 50 })
  columnId: string = 'cid';
}
