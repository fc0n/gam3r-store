import { Produto } from '@/app/core'
import Image from 'next/image'
import Link from 'next/link'

export interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props
    return  (
        <Link
        href={`/produto/${props.produto.id}`}
        className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
        >
            <div className="w-full h-48 relative">
                <Image
                    src={produto.imagem}
                    fill
                    className="object-contain"
                    alt="Imagem do Produto"
                />
            </div>
            {produto.nome}
        </Link>
    )
}