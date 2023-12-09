import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import React, { useState } from 'react';
import Saude from './pages/saude';
import { Container,Button,lightTheme,darkTheme } from './Estilos/Estilo';
import { ThemeProvider } from 'styled-components';
import Cep from './pages/cep';

function App() {
  const [theme,setTheme]= useState('light')
  const mudarTheme = () => {
      setTheme(mudar => mudar === 'light'? 'dark' : 'light')
  }
  return (
    <>
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
      
    <Button onClick={mudarTheme}>dark</Button>
    <hr/>
    <Container>
                  <BrowserRouter>
                    <Routes>
                          <Route path='/' element={<Home />} />
                          <Route path='/sobre' element={<Sobre />} />
                          <Route path='/saude' element={<Saude />} />
                          <Route path='/cep' element={<Cep />} />
                    </Routes>
                  </BrowserRouter>
    </Container>
    </ThemeProvider>
    </>
  );
}
export default App;