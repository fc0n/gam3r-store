import AvaliacaoEspecializada from "@/app/components/produto/avaliacaoEspecializada"
import AvaliacoesUsuarios from "@/app/components/produto/avaliacoesUsuarios"
import BannerCompra from "@/app/components/produto/bannerCompra"
import InformacoesProduto from "@/app/components/produto/informacoesProduto"
import MedidorDePreco from "@/app/components/produto/medidorDePreco"
import ProdutoNaoEncontrado from "@/app/components/produto/produtoNaoEncontrado"
import TituloProduto from "@/app/components/produto/tituloProduto"
import { produtos } from "@gstore/core"

export default function PaginaProduto(props: any) {
    const id = +props.params.id
    const produto = produtos.find((produto) => produto.id === id)
    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
        <div className="flex flex-col gap-10">
            <TituloProduto produto={produto} />
            <InformacoesProduto produto={produto} />
            <BannerCompra produto={produto} />
            <MedidorDePreco produto={produto}/>
        </div>
        <AvaliacoesUsuarios  produto={produto}/>
        <AvaliacaoEspecializada  produto={produto}/>
    </div>
    ) :  (
        <ProdutoNaoEncontrado />
    )
}