import styled from "styled-components";
export const lightTheme = {
    corFundo: '#E5BCB9',
    corTexto: '#000000',
    corTitulo: '#C8A5A2'
}

export const darkTheme = {
    corFundo: '#2a0a0a',
    corTexto: 'white',
    corTitulo: '#fffdd0'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`
// Criando um botão
export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #725E5C;
    color: white;
    margin: 5px;
    border-radius: 5px;
    
    
`
// Criando um título
export const TitlePage = styled.h1`
    color: #AA8C8A;
    font-size: 30px;
    text-align:center;
    padding:5px;
`
export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`
// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #FFF;
   border-radius:5px;
    `