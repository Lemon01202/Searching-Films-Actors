import { Route, Switch } from 'react-router-dom';
import './App.css';
import Content from './components/Content/Content';
import Episodes from './components/Episodes/Episodes';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/characters">
            <Content />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
        </Switch>

      </div >
    </div>
  );
}

export default App;
