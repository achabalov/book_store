import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { publicRoute, RouteNames } from './router'

export const AppRouter:React.FC = () =>  {
    return (
        <Switch>
         {publicRoute.map(route=> 
            <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
            )}
            <Redirect to={RouteNames.HOME} /> 
        </Switch>
    )
}
