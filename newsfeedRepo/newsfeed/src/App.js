import React, { useState }  from 'react';
import './App.css';
import Home from './Components/Home'
import DetailedView from './Components/DetailedView'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'



function App(props) {
  const [values, setValues] = useState() 
  const reset = () => {
    setValues(undefined)
  }
    return (
      <div>
          <Router>
            <Switch>
                <Route path="/" exact>
                  <Home setValues={setValues}/>
                </Route>
                <Route path="/detailedview">
                  <DetailedView data={values} reset={reset}/>
                </Route>
            </Switch>
          </Router>
      </div>
    );
}

export default App;
