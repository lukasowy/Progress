var React = require('react');
var SignupForm = require('./SignupForm');

class SignupPage extends React.Component {
  render(){
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm/>
        </div>
      </div>
    );
  }
}

module.exports = SignupPage;
