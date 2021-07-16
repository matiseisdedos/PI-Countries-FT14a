import './App.css';
import PaisesCards from './modules/paisesCards';
import { Route } from 'react-router-dom'
import WelcomePage from './modules/welcome/Welcome';
import addActivity from './modules/formActivity/formAct'

function App() {
  return (
    <>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/countries" component={PaisesCards} />
      <Route exact path="/activity" component={addActivity} />
    </>
  );
}

export default App;
