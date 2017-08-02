import React from 'react';
import Wrapper from "./components/wrapper";
import { Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <div>
              <Route exact path="/" component={Wrapper}/>
            </div>
        );
    }
}

export default App;
