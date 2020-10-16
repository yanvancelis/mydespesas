import React, { Fragment } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Routes from './Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Wrap, Article} from './styles'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import { Provider } from 'react-redux'
import store from './store'

export default function App () {
  return(
      <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component= {() => <Login />} /> 
            <Route exact path="/novousuario" component= {() => <Cadastro />} />     
            <Fragment>
              <Header></Header>
                <Wrap>
                  <Menu></Menu>
                  <Article>                    
                    <Routes />                   
                  </Article>
                </Wrap>                                                 
            </Fragment>
          </Switch>
        </Router> 
        </Provider>       
      </>
  )
}