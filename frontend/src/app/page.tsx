import ProdutoItem from "./components/produto/produtoItem";
import Pagina from "./components/template/pagina";
import { produtos } from "./core";

export default function Home() {
  return (
    <Pagina>
      <div className="grid grid-cols-4 container">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto}/>
        ))}
      </div>
    </Pagina>
  )
}
