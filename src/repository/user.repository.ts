import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from 'src/models/user';
import { CreateUserDto } from 'src/utils/validatations/createUser.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  //Create New User
  createUser(newUser :CreateUserDto): Promise<User> {
    return this.dataSource.getRepository(User).save(newUser);
  }

  //get A User BY ID
  async getBookingByID(userId: number): Promise<User | null> {
    return await this.dataSource
      .getRepository(User)
      .findOne({ where: { id: userId } });
  }

  //get All users
  async getUsers(): Promise<User[]> {
    return await this.find()
    // return await this.dataSource.getRepository(User).find();
  }
}
