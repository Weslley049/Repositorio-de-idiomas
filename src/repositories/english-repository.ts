import { Phrase, Prisma, Sentence } from '@prisma/client';

export abstract class EnglishRepository {
  abstract createSentence(data: Prisma.SentenceCreateInput): Promise<Sentence>;
  abstract getSetences(): Promise<Sentence[]>;
  abstract createPhrase(data: Prisma.PhraseCreateInput): Promise<Phrase>;
}
