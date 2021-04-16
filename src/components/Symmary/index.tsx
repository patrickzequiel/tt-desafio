import { Container } from "./styles";

export function Summary() {

    return(
        <Container>
            <div>
                <header>
                    <p>Total de Pedidos</p>
                </header>
                <strong>
                    4
                </strong>
            </div>
            <div className="highLight-background">
                <header>
                    <p>Valor Total</p>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(12000)}
                </strong>
            </div>
        </Container>
    )
}