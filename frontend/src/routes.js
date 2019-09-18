import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
//auxilia na criação de rotas

import Login from './components/login/Login'
import Calendario from './components/calendario/Calendario'


export default function Routes() {
    return(
        <BrowserRouter>
             {/*Exact para comparar com exatidão, senão ele só iria para o '/'  */}
            <Route path='/' exact component={Login} />
            <Route path='/Calendario' component ={Calendario} />
        </BrowserRouter>
    )
}