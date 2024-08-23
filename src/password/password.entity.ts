import { User } from 'src/user/user.entity';
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('passwords')
export class Password {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  salt: string;

  @Column()
  hash: string;

  @OneToOne(() => User, user => user.password, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Index({ unique: true })
  @Column({ unique: true, name: 'user_id' })
  userId: string;
}
