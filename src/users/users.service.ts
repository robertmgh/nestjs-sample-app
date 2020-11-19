import { Injectable } from '@nestjs/common';
import { GetUserDto, UserDto, UpdateUserDto, CreateUserDto } from './dto'

@Injectable()
export class UsersService {
  private users: Array<UserDto> = [];

  getAll(): Array<GetUserDto> {
    return this.users.map((user: UserDto) => GetUserDto.fromDomain(user))
  }

  get(id: Number): GetUserDto {
    const user = this.users.find((user: UserDto) => user.id == id)
    if (user != null) { return GetUserDto.fromDomain(user) } else return null;
  }

  create(create: CreateUserDto): void {

    const domainUser = CreateUserDto.toDomain(create);
    domainUser.id = this.users.length + 1;

    this.users.push(domainUser);
  }

  update(update: UpdateUserDto): void {
    const user = this.users.find((user: UserDto) => user.id == update.id)

    if (update.name != null) user.name = update.name;
    if (update.surname != null) user.surname = update.surname;
    if (update.age != null) user.age = update.age;
  }

  delete(id: Number): void {
    const userIndex = this.users.findIndex((user: UserDto) => user.id == id)
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
    }
  }
}
