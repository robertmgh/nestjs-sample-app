export class UserDto {
    id: Number;
    name: String;
    surname: String;
    age: Number;
}

export class UpdateUserDto {
    id: Number;
    name: String;
    surname: String;
    age: Number;
}

export class CreateUserDto {
    name: String;
    surname: String;
    age: Number;

    static toDomain(createUser: CreateUserDto): UserDto {
        const dtoUser = new UserDto();
        dtoUser.name = createUser.name;
        dtoUser.surname = createUser.surname;
        dtoUser.age = createUser.age;
        return dtoUser;
    }
}

export class GetUserDto {
    id: Number;
    name: String;
    surname: String;
    age: Number;

    static fromDomain(domainUser: UserDto): GetUserDto {
        const dtoUser = new GetUserDto();
        dtoUser.id = domainUser.id;
        dtoUser.name = domainUser.name;
        dtoUser.surname = domainUser.surname;
        dtoUser.age = domainUser.age;
        return dtoUser;
    }
}