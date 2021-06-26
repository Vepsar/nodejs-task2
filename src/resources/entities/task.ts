import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'task' })
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { nullable: true })
  title = 'base string';

  @Column('int')
  order = 0;

  @Column('varchar', { nullable: true })
  description = 'base description';

  @Column({ type: 'text', nullable: true })
  userId!: string | null;

  @Column('varchar', { nullable: true })
  columnId: string | null = null;

  @Column({ type: 'text', nullable: true })
  boardId!: string;
}
