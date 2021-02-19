import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './users.entity'; // typeormで定義したUserエンティティ

/**
 * @description User情報を扱うクラス
 */
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>
  ) {}

  // ユーザーを一人を返す
  findOne(username: Users['name']): Promise<Users | undefined> {
    // typeormからDBにアクセスして、ユーザーを取得する
    return this.userRepository.findOne({ where: { neme: username } });
  }
}