import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreatePasswordDto } from './dto/create-password.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { Password } from './password.entity';
import { PasswordService } from './password.service';

@Controller('password')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Get()
  @ApiOperation({ summary: 'Get all passwords' })
  @ApiResponse({ status: 200, description: 'List of passwords', type: [Password] })
  findAll(): Promise<Password[]> {
    return this.passwordService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get password by ID' })
  @ApiParam({ name: 'id', description: 'Password ID' })
  @ApiResponse({ status: 200, description: 'Password found', type: Password })
  @ApiResponse({ status: 404, description: 'Password not found' })
  findOne(@Param('id') id: string): Promise<Password> {
    return this.passwordService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new password' })
  @ApiResponse({ status: 201, description: 'Password created', type: Password })
  create(@Body() createPasswordDto: CreatePasswordDto): Promise<Password> {
    return this.passwordService.create(createPasswordDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update password by ID' })
  @ApiParam({ name: 'id', description: 'Password ID' })
  @ApiResponse({ status: 200, description: 'Password updated', type: Password })
  @ApiResponse({ status: 404, description: 'Password not found' })
  update(@Param('id') id: string, @Body() updatePasswordDto: UpdatePasswordDto): Promise<Password> {
    return this.passwordService.update(id, updatePasswordDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete password by ID' })
  @ApiParam({ name: 'id', description: 'Password ID' })
  @ApiResponse({ status: 200, description: 'Password deleted' })
  @ApiResponse({ status: 404, description: 'Password not found' })
  remove(@Param('id') id: string): Promise<void> {
    return this.passwordService.remove(id);
  }
}
