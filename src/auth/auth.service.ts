import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../app/users/users.entity';
import { UsersService } from '../app/users/users.service';
import { compareSync } from 'bcrypt';
import { JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService, 
    private readonly jwtService: JwtService
  ) {}

  async login(user) {
    console.log(user)
    const payload = { sub: user.id, email: user.email }

    return {
      id: user.id,
      token: this.jwtService.sign(payload),
      firstName: user.firstName,
      lastName: user.lastName
    }
  }

  async validateUser(email: string, password: string) {
    let user: UsersEntity
    try {
      user = await this.userService.findOneByOrFail({ email })
    } catch (error) {
      return null
    }

    const isPasswordValid = compareSync(password, user.password)
    if(!isPasswordValid) return null

    return user
  }
}
