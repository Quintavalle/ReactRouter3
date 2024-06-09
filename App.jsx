import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import GithubUser from './GithubUser'; // Make sure to import GithubUser component
import Counter from './Counter'; // Make sure to import Counter component

const ShowGithubUser = ({ match }) => {
  const { username } = match.params;
  return <GithubUser username={username} />;
};

const GithubUserListIndex = () => {
  return <p>Add a user and select it</p>;
};

const App = () => {
  return (
    <Router>
      <div>
        <h1>My App</h1>
        {/* Navigation Links */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users/johndoe">John's Profile</Link></li>
          <li><Link to="/users/janedoe">Jane's Profile</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/github-users">GitHub Users</Link></li>
          {/* Add more links as needed */}
        </ul>

        {/* Route Definitions */}
        <Route exact path="/" render={() => <Welcome name="John" />} />
        <Route path="/users/:username" component={ShowGithubUser} />
        <Route path="/counter" component={Counter} />
        <Route path="/github-users" render={() => <GithubUserListIndex />} />
      </div>
    </Router>
  );
};

export default App;


