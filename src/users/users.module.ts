import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { Users } from './users.entity';

@Module({
  // UserエンティティをUsersServiceで使えるようにする
  imports: [TypeOrmModule.forFeature([Users])], 

  // exportsするために必要。UsersModule内で使うのにも必要。
  providers: [UsersService], 

  // UsersServiceを他のクラスでも使えるようにする
  exports: [UsersService], 
})
export class UsersModule {}
