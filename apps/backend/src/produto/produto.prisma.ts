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

    async obter(): Promise<Produto[]> {
        const produtos = await this.prisma.produto.findMany();
        return produtos as any;
    }

    async obterPorId(id: number): Promise<Produto | null> {
        const produto = await this.prisma.produto.findUnique({ where: { id } });
        return (produto as any) ?? null;
    }
}
