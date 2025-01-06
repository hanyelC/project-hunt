import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(req: any) {
    console.log(req.user);
    if (!req.user)
      return {
        message: 'bestinha',
      };

    return {
      message: 'bestinha logado',
      user: req.user,
    };
  }
}
