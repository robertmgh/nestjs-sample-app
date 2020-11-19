import { Controller, Get, Put, Param, Post, Delete, Body, HttpCode } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto, GetUserDto } from './dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  @HttpCode(200)
  getAll(): Array<GetUserDto> {
    return this.usersService.getAll();
  }

  @Get(":id")
  @HttpCode(200)
  get(@Param('id') id: Number): GetUserDto {
    return this.usersService.get(id);
  }

  @Post()
  @HttpCode(200)
  create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Put()
  @HttpCode(200)
  update(@Body() updateUserDto: UpdateUserDto) {
    this.usersService.update(updateUserDto);
  }

  @Delete(":id")
  @HttpCode(200)
  delete(@Param('id') id: Number) {
    this.usersService.delete(id);
  }
}
