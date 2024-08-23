import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from 'typeorm';
import { User } from '../user/user.entity';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Index({ unique: true })
  @Column()
  label: string;

  @OneToMany(() => User, user => user.role)
  users: User[];
}
