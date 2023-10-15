import { Module } from '@nestjs/common';
import { EnglishController } from './controllers/english.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaEnglishRepository } from './repositories/prisma/prisma-english-repository';

@Module({
  imports: [],
  controllers: [EnglishController],
  providers: [PrismaEnglishRepository, PrismaService],
})
export class AppModule {}
