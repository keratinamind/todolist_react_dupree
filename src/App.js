import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import { AuthContext } from './contexts/authContext';
import routes from './config/route';

function App() {
  const { user } = useContext(AuthContext);
  const role = user ? 'user' : 'guest';
  // routes[role] = [{ path:, component: }, ...]
  return (
    <>
      <Header />
      <Container>
        <Switch>
          {routes[role].route.map(item => (
            <Route key={item.path} exact path={item.path} component={item.component} />
          ))}
          <Redirect to={routes[role].redirect} />
          
        </Switch>
      </Container>
    </>
  );
}

export default App;
