class Pedidos
{
    numero;
    itens;
    endereco;
    nome;

    constructor(numero, itens, endereco, nome)
    {
        this.numero = numero;
        this.itens = itens;
        this.endereco = endereco;
        this.nome = nome;
    }
}

class FilaDePedidos
{
    fila = [];

    adicionarAFila(Pedido)
    {
        this.fila.push(Pedido);
    }

    verFilaDePedidos()
    {
        let fila = '';
        this.fila.forEach(pedido => {
            fila += pedido.numero + ' ' + pedido.nome + ' ' + pedido.endereco + "\n";
        });

        return fila;
    }

    retirarPedidoDaFila()
    {
        this.fila.shift();
    }

    verTamanhoDaFila()
    {
        return this.fila.length;
    }

}

let Pedido = new Pedidos(222, ['hamburguer', 'refri'], 'rua Carlos 99', 'Josh' );
let Pedido2 = new Pedidos(223, ['peixe', 'batata'], 'rua Oito 19', 'Lore');

let fila = new FilaDePedidos();
fila.adicionarAFila(Pedido);
fila.adicionarAFila(Pedido2);

fila.adicionarAFila(
    new Pedidos(225, ['creme', 'paçoca'], 'rua Seis 25', 'Julia');
)

let filaDePedidos = fila.verFilaDePedidos();

console.log(fila.verTamanhoDaFila());





console.log(filaDePedidos);

fila.retirarPedidoDaFila();
console.log(fila.verFilaDePedidos());
console.log(fila.verTamanhoDaFila());
