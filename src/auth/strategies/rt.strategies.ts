import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class rtStrategy extends PassportStrategy(Strategy,'jwt-refresh') {
constructor() {
    super({
            jwFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),      
            ignoreExpiration: false,
            secretOrKey: 'top_secret_key',
            passReqToCallback: true
        });
    }

    valida(req:Request,payload: any) {
        return payload;
    }
}