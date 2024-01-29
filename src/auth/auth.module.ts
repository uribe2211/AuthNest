import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AtStrategy } from './strategies/at.strategies';
import { rtStrategy } from './strategies/rt.strategies';

@Module({
  imports: [PrismaModule],
  providers: [AuthService,AtStrategy,rtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
