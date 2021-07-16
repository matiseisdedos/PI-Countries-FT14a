import './App.css';
import PaisesCards from './modules/paisesCards';
import { Route } from 'react-router-dom'
import WelcomePage from './modules/welcome/Welcome';

function App() {
  return (
    <>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/countries" component={PaisesCards} />
    </>
  );
}

export default App;
