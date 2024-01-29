import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types/tokens.type';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Post('/local/sigup')
    async signUpLocal(@Body() authDto: AuthDto): Promise<void> {
        return this.authService.signUpLocal(authDto);
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
