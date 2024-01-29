import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types/tokens.type';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) {
    }

    async hashData(data: string) {
        return  await bcrypt.hashSync(data, 10);
    }

    async signUpLocal(auth: AuthDto): Promise<void> {
        const hash=await this.hashData(auth.password);

        const newUser = await this.prisma.user.create({
            data: {
                email: auth.email,
                hash,
                hasedRt:hash,
                name: auth.name,
                password:hash
            }
        });
            
    }

    async signInLocal() {

    }

    async logout() {

    }

    async refreshTokens() {

    }
}
