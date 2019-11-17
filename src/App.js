import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {AuthContext, Authenticated} from './auth'
import Protected from './Protected'

function App() {
  return (
    <div style={{ padding: 20 }}>
      <AuthContext>
        <Router>
          <Route path='/'>
            <div>
              <Link to='/'>Home</Link>
              {' '}
              <Link to='/protected'>Protected</Link>
            </div>
          </Route>
          <Route path='/protected'>
            <Authenticated>
              <Protected />
            </Authenticated>
          </Route>
        </Router>
      </AuthContext>
    </div>
  );
}

export default App;
