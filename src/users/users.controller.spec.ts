import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';

describe('UserController', () => {
  let appController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    appController = app.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return empty array', () => {
      expect(appController.getAll()).toStrictEqual([]);
    });

    it('should return created user', () => {
      const newUser = new CreateUserDto();

      newUser.name = "TestName";
      newUser.surname = "TestSurname"
      newUser.age = 31;

      appController.create(newUser);
      expect(appController.getAll().length).toEqual(1);
    });

    it('should return updated user', () => {

      const newUser = new CreateUserDto();

      newUser.name = "TestName";
      newUser.surname = "TestSurname"
      newUser.age = 31;

      appController.create(newUser);

      const updateUser = new UpdateUserDto();

      updateUser.name = "TestName2";
      updateUser.surname = "TestSurname2"
      updateUser.age = 32;
      updateUser.id = 1;

      appController.update(updateUser);

      expect(appController.getAll()[0].name).toEqual(updateUser.name);
      expect(appController.getAll()[0].surname).toEqual(updateUser.surname);
      expect(appController.getAll()[0].age).toEqual(updateUser.age);
    });

    it('should delete user', () => {
      const newUser = new CreateUserDto();

      newUser.name = "TestName";
      newUser.surname = "TestSurname"
      newUser.age = 31;

      appController.create(newUser);
      expect(appController.getAll().length).toEqual(1);
      appController.delete(1);
      expect(appController.getAll().length).toEqual(0);
    });
  });
});
