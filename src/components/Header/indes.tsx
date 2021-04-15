import { Container, Content } from './styles'


const Header = (): JSX.Element => {
    return(
        <Container>
        <Content>
            <h1>Produtos</h1>
            <button type="button" >
                Novo
            </button>
        </Content>
        </Container>
    )
}

export default Header;