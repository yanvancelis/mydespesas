import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index'
import Despesas from './pages/Despesas'
import Rendimentos from './pages/Rendimentos'
import Usuario from './pages/Meu-Usuario'
import Relatorio from './pages/Relatorios'

function Routes () {
    return (
        <>
            <Route exact path="/" component= {() => <Index />} />            
            <Route path="/rendimentos" component= {() => <Rendimentos />} />
            <Route path="/despesas" component= {() => <Despesas />} />
            <Route path="/relatorios" component= {() => <Relatorio />} />
            <Route path="/meu-usuario" component= {() => <Usuario />} />              
        </>
    )
}

export default Routes