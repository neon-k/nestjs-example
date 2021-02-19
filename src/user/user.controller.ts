import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  HttpException,
  Get,
} from '@nestjs/common';
import { CreateUserDTO, LoginUserDTO } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.entitie';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    try {
      const users = await this.userService.getUsers()

      console.log(users);

      return users
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500,
      );
    }
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    const {screenName} = createUserDTO

    const isToken = await this.userService.findUserByScreenName(screenName)

    if (isToken) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `Screen name '${screenName}' is already taken.`,
        },
        409,
      );
    }
    try {
      await this.userService.register(createUserDTO);
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500,
      );
    }
    return;
  }

  @Post('login')
  async login(@Body() loginUserDTO: LoginUserDTO): Promise<User> {
    let user: User;
    try {
      user = await this.userService.loginUser(
        loginUserDTO.screenName,
        loginUserDTO.password,
      );
    } catch (e) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Internal server error.',
        },
        500,
      );
    }
    if (!user) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User Not found.',
        },
        404,
      );
    }
    return user;
  }
}