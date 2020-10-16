import React from 'react';
import { Route } from 'react-router-dom';
import Index from './pages/Index'
import Despesas from './pages/Despesas'
import Rendimentos from './pages/Rendimentos'
import Usuario from './pages/Meu-Usuario'
import Relatorio from './pages/Relatorios'
import NovoLancamento from './pages/NovoLancamento'
import Rendimento from './pages/Rendimento'

function Routes () {
    return (
        <>
            <Route exact path="/" component= {() => <Index />} />            
            <Route path="/rendimentos" component= {() => <Rendimentos />} />
            <Route path="/rendimentos/:id" component= {() => <Rendimento />} />
            <Route path="/despesas" component= {() => <Despesas />} />
            <Route path="/despesas/:id" component= {() => <Despesas />} />
            <Route path="/relatorios" component= {() => <Relatorio />} />
            <Route path="/meu-usuario" component= {() => <Usuario />} /> 
            <Route path="/novo-lancamento" component= {() => <NovoLancamento />} />             
        </>
    )
}

export default Routes