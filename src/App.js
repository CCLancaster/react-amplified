import './App.css';

import React, { useEffect, useState } from 'react'
import Amplify, { API, Auth, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router } from 'react-router-dom'
import ContentRouter from './Content/Router'

// Queries
import { listUsers } from './graphql/queries'

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {

  // STATES
  let [user, setUser] = useState(null)
  
  // ON STARTUP
  useEffect(() => {
    getUsers()
  }, []) 

  if(!user) return <p> Loading user data... </p>

  // HELPER FUNCTIONS
  async function getUsers() {
    try {
      const userData = await API.graphql(graphqlOperation(listUsers, {filter: {email: {eq: Auth.user.attributes.email}}}))
      setUser(userData.data.listUsers.items[0])
    } catch(err) {
      console.log("Error on App:", err)
    }
  }
  // BODY
  return (
    <Router>
      <div className="App">
        <ContentRouter user={user} />
      </div>
    </Router>
  );
}

export default withAuthenticator(App)
