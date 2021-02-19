import { Injectable } from '@nestjs/common';
import { User } from './user.entitie';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';

const SALT = '12345';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // パスワードを暗号化
  private createPasswordDigest(password: string) {
    return crypto
      .createHash('sha256')
      .update(SALT + '/' + password)
      .digest('hex');
  }

  // 指定したスクリーン名を存在するか
  async findUserByScreenName(screenName: string): Promise<boolean> {
    // const user = await this.userRepository.findOne({ where: { screenName } });
    // return !!user;

    return false
  }

  // ユーザーデータを追加
  async register(userData: Partial<User>): Promise<void> {
    // if (await this.findUserByScreenName(userData.screenName)) {
    //   return Promise.reject(new Error('User is already taken.'));
    // }

    await this.userRepository.insert({
      ...userData,
      password: this.createPasswordDigest(userData.password),
    });
    return;
  }

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository
      .createQueryBuilder("user")
      .select(["screenName"])
      .addSelect("COUNT(user.screenName)", "cnt")
      .groupBy("user.screenName")
      .getRawMany()

    console.log(users);
    

    return users;
  }


  // ログインユーザーを取得
  async loginUser(screenName: string, password: string) {
    return await this.userRepository.findOne({
      where: {
        screenName,
        password: this.createPasswordDigest(password),
      },
    });
  }
}