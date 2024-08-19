import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async create(createUserDto: any): Promise<User[]> {
    const role = this.userRepository.create(createUserDto);
    return this.userRepository.save(role);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const role = await this.userRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return role;
  }

  async update(id: string, updateUserDto: any): Promise<User> {
    const role = await this.findOne(id);
    Object.assign(role, updateUserDto);
    return this.userRepository.save(role);
  }

  async remove(id: string): Promise<void> {
    const role = await this.findOne(id);
    await this.userRepository.remove(role);
  }
}
