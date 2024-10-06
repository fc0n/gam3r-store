import { Produto } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaProvidor } from 'src/db/prisma.providor';

@Injectable()
export class ProdutoPrisma {
    constructor( readonly prisma: PrismaProvidor) {}

    async salvar(produto: Produto): Promise<void> {
        await this.prisma.produto.upsert({
          where: { id: produto.id ?? -1 },
          update: produto,
          create: produto,
        });
    }
}
