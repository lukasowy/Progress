var React = require('react');
var api = require('../utils/api');
var Exercices = require('./Exercices/Exercices');
var Error404 = require('./Error404');
var Rips = require('./Exercices/Rips')
var Nav = require('./Nav');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>

            <Route path={'/:id'} component={Rips}/>
            <Route  path={'/'} component={Exercices}/>
            <Route component={Error404}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
