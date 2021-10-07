import React from 'react'
import { Redirect, Route } from 'react-router'
import { publicRoute } from './router'

export default function AppRouter() {
    return (
        <>
         {publicRoute.map(route=> 
            <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
            )}
            <Redirect to='/' /> 
        </>
    )
}
