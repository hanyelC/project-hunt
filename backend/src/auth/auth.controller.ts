import { Controller, Get, UseGuards } from '@nestjs/common';
import { GoogleOauthGuard } from 'src/auth/guards/google-oauth.guard';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(GoogleOauthGuard)
  async auth() {}
}
