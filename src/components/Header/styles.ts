import styled from 'styled-components';

export const Container = styled.div`
background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 10rem; //1rem equivale ao tamanho do font-size do root, então no nosso caso, desk é 16px;

    display: flex; //logo e botão estajm alinhados ao centro
    align-items: center; //logo e botão estajm alinhados ao centro
    justify-content: space-between;

    color: var(--shape);

    button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: 0; //remover o border do html
    padding: 0 2rem;//32px na direita e na esquerda
    border-radius: 0.25rem; //4px no Desktop
    height: 3rem; //48px de altura (pega 16 e multiplica pelo número)
    transition: filter 0.2s; //toda vez que sofrer o filter, ele vai fazer a transicao em 0.2 segundos
    
    &:hover {
    filter: brightness(0.9) //levemente escurecer a cor do botão
    
    }
    
}
`

