import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export default function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return(
        <Container>
        <Content>
            <h1>Pedidos</h1>
            <button type="button" onClick={onOpenNewTransactionModal}>
                Novo
            </button>
        </Content>
        </Container>
    )
};
