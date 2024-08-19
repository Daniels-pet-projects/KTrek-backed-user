import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePasswordDto } from './dto/create-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { Password } from './password.entity';

@Injectable()
export class PasswordService {
  constructor(
    @InjectRepository(Password)
    private readonly passwordRepository: Repository<Password>
  ) {}

  async findAll(): Promise<Password[]> {
    return this.passwordRepository.find();
  }

  async findOne(id: string): Promise<Password> {
    const role = await this.passwordRepository.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException(`Password with ID ${id} not found`);
    }
    return role;
  }

  async create(createPasswordDto: CreatePasswordDto): Promise<Password> {
    const role = this.passwordRepository.create(createPasswordDto);
    return this.passwordRepository.save(role);
  }

  async update(id: string, updatePasswordDto: UpdatePasswordDto): Promise<Password> {
    const role = await this.findOne(id);
    Object.assign(role, updatePasswordDto);
    return this.passwordRepository.save(role);
  }

  async remove(id: string): Promise<void> {
    const role = await this.findOne(id);
    await this.passwordRepository.remove(role);
  }
}
