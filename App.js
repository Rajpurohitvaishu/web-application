import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import LoadingIndicator from './components/LoadingIndicator';
import axios from 'axios';

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get('/api/profiles')
      .then(response => {
        setProfiles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching profiles:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    if (query) {
      setProfiles(profiles.filter(profile => profile.name.includes(query)));
    } else {
      // Reload the original profiles data
      axios.get('/api/profiles')
        .then(response => setProfiles(response.data))
        .catch(error => console.error('Error fetching profiles:', error));
    }
  };

  if (loading) return <LoadingIndicator />;

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/admin">Admin</Link>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <ProfileList profiles={profiles} onSelectProfile={handleSearch} />} />
          <Route path="/profile/:id" render={({ match }) => {
            const profile = profiles.find(p => p.id === match.params.id);
            return <ProfileDetails profile={profile} />;
          }} />
          <Route path="/admin" render={() => <AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
