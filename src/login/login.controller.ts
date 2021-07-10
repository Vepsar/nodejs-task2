import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { TokenDto } from './dto/token.dto';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async create(
    @Body() createLoginDto: CreateLoginDto,
  ): Promise<TokenDto | undefined> {
    const token: TokenDto = {
      token: await this.loginService.getToken(createLoginDto),
    };
    if (token !== undefined) return token;
    return undefined;
  }
}
