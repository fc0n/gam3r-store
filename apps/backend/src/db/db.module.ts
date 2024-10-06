import { Module } from '@nestjs/common';
import { PrismaProvidor } from './prisma.providor';

@Module({
  providers: [PrismaProvidor]
})
export class DbModule {}
