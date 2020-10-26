import React , { useState }from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import DetailedView from './Components/DetailedView'


function AppRouting() {
    const [values, setValues] = useState()
    return (
      <div>
        <Router>
            <Switch>
                <Route path="/" exact>
                  <Home setValues={setValues} />
                </Route>
                <Route path="/detailedview" exact>
                  <DetailedView data={values} />
                </Route>
            </Switch>
          </Router>
      </div>
    );
}

export default AppRouting;
