import { createHash } from 'src/utils/hashmiddle';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserResponceDto } from '../dto/user-responce.dto';
// import { createHash } from '../../utils/hashmiddle';

@Entity({ name: 'user' })
export class User {
  @BeforeInsert()
  async hashpass() {
    this.password = await createHash(this.password);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('varchar', { length: 30, nullable: true })
  name: string = '';

  @Column('varchar', { length: 20, nullable: true })
  login: string = '';

  @Column('text', { nullable: true })
  password: string | undefined;

  static toResponse(user: User | undefined): UserResponceDto | undefined {
    if (user !== undefined) {
      const { id, name, login } = user;
      return { id, name, login };
    }
    return undefined;
  }
}
