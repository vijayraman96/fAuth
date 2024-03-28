import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from "./main";
import CallbackE from './callbackE'
import Privacy from './privacy';
import DeleteE from "./deleteE";

const responseFacebook = (response) => {
  console.log(response);
};

function App() {
  return (
    
      <div className="App">
       <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/callback" component={CallbackE} />
        <Route path="/privacy" exact component={Privacy} />
        <Route path="/delete" exact component={DeleteE} />
      </Switch>
    </BrowserRouter>
      </div>
    // </React.StrictMode>
  );
}

export default App;
