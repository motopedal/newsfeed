import React, { useState }  from 'react';
import './App.css';
import Home from './Components/Home'
import DetailedView from './Components/DetailedView'



function App() {
  const [values, setValues] = useState() 
  const reset = () => {
    setValues(undefined)
  }
    return (
      <div>
        {(values === undefined) 
          ?  [<Home setValues={setValues}/>]
          :  [<DetailedView 
            reset={reset}
            data={values}/>
            ]
        }
      </div>
    );
}

export default App;
