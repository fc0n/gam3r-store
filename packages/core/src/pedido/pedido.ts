import { FormaPagamento } from "./formaPagamento"
import ItemPedido from "./itemPedido"
import PedidoEntrega from "./pedidoEntrega"
import { Status } from "./status"


export default interface Pedido {
    id: number
    data: Date
    itens: ItemPedido[]
    valorTotal: number
    status: Status
    formaPagamento: FormaPagamento
    entrega: PedidoEntrega
}
