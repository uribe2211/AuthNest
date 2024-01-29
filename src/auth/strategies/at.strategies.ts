import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy,'jwt') {
constructor() {
    super({
            jwFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),      
            ignoreExpiration: false,
            secretOrKey: 'top_secret_key',
        });
    }

    valida(payload: any) {
        return payload;
    }
}
