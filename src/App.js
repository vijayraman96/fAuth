import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from './Main'
import CallbackE from './CallbackE'
import Privacy from './Privacy';
import DeleteE from "./DeleteE";

const responseFacebook = (response) => {
  console.log(response);
};

function App() {
  return (
    
      <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/callback" component={CallbackE} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/delete" exact component={DeleteE} />
          <Route path="/" component={Main} />
        </Switch>
      </BrowserRouter>
      </div>
    // </React.StrictMode>
  );
}

export default App;
