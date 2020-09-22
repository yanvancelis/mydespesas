import React, { Fragment } from 'react';
import Header from './components/Header'
import Menu from './components/Menu'
import Routes from './Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Wrap, Article} from './styles'

export default function App () {
  return(
      <>
        <Router>
          <Switch>    
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
      </>
  )
}