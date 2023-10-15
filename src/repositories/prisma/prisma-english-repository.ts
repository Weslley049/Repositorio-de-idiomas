import { Injectable } from '@nestjs/common';
import { Phrase, Prisma, Sentence } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { EnglishRepository } from '../english-repository';

@Injectable()
export class PrismaEnglishRepository implements EnglishRepository {
  constructor(private prisma: PrismaService) {}

  async getSetences(): Promise<Sentence[]> {
    return this.prisma.sentence.findMany({
      where: { languageId: { in: [1] } },
    });
  }

  async createSentence(data: Prisma.SentenceCreateInput): Promise<Sentence> {
    return this.prisma.sentence.create({
      data,
    });
  }

  async createPhrase(data: Prisma.PhraseCreateInput): Promise<Phrase> {
    return this.prisma.phrase.create({
      data,
    });
  }
}
