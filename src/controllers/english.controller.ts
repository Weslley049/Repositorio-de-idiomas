import { Body, Controller, Get, Post } from '@nestjs/common';
import { Phrase, Prisma, Sentence } from '@prisma/client';
import { PrismaEnglishRepository } from './../repositories/prisma/prisma-english-repository';

@Controller('english')
export class EnglishController {
  constructor(
    private readonly prismaEnglishRepository: PrismaEnglishRepository,
  ) {}

  @Get()
  getSentences(): Promise<Sentence[]> {
    return this.prismaEnglishRepository.getSetences();
  }

  @Post('sentence')
  createSentence(@Body() body: Prisma.SentenceCreateInput): Promise<Sentence> {
    return this.prismaEnglishRepository.createSentence(body);
  }

  @Post('phrase')
  createPhrase(@Body() body: Prisma.PhraseCreateInput): Promise<Phrase> {
    return this.prismaEnglishRepository.createPhrase(body);
  }
}
