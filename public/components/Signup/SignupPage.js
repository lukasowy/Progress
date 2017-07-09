var React = require('react');
var SignupForm = require('./SignupForm');
var axios = require('axios');
var ReactRouter = require('react-router-dom');

class SignupPage extends React.Component {

 userSignupRequest(userData){
    return axios.post('/api/user',userData)
  }
  render(){

    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={this.userSignupRequest}  history={this.props.history}/>
        </div>
      </div>
    );
  }
}

module.exports = SignupPage;
