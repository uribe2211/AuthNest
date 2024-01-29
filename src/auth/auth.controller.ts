import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('/local/sigup')
    signUpLocal(@Body() authDto: AuthDto) {
        this.authService.signUpLocal(authDto);
    }

    @Post('/local/signin')
    signInLocal() {
        this.authService.signInLocal();
    }

    @Post('/local/logout')
    logout() {
        this.authService.logout();
    }

    @Post('/local/refresh')
    refreshTokens() {
        this.authService.refreshTokens();
    }

}
