import React from 'react';
import { Route } from 'react-router-dom'
import ToDo from './ToDo'
import TestPage from './TestPage'
import Dashboard from './Dashboard/Dashboard'

const ContentRouter = props => {
    return (
        <main>
            <Route exact path="/" render={
                () => <Dashboard user={props.user} />
            } />
            <Route path="/todo" render={ 
                () => <ToDo />
            } />
            <Route path="/test" render={
                () => <TestPage />
            } />
        </main>
    )
}

export default ContentRouter