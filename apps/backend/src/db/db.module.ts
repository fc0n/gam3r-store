import { Module } from '@nestjs/common';
import { PrismaProvidor } from './prisma.providor';

@Module({
  providers: [PrismaProvidor],
  exports: [PrismaProvidor]
})
export class DbModule {}
