var React = require('react');
var classnames = require('classnames');
var Validator =  require('validator');
var isEmpty =  require( 'lodash/isEmpty');
import TextFieldGroup from './TextFieldGroup';

import history from 'history';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      surname:'',
      username: '',
      password:'',
      passwordConfirmation:'',
      errors:{},
      isLoading:false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.name)) {
    errors.name = 'This field is required';
  }
  if (Validator.isEmpty(data.surname)) {
    errors.surname = 'This field is required';
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = 'This field is required';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = 'This field is required';
  }
  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'This field is required';
  }
  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

isValid(){
  const {errors, isValid} = this.validateInput(this.state);

  if(!isValid){
    this.setState({errors});
  }
  return isValid;
}

  onSubmit(e){
    e.preventDefault();
    if(this.isValid()){
      this.setState({errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.props.history.push('/');
        },
        ({ data }) => this.setState({ errors:data, isLoading:false })
      );
    }
  }
  render() {
    const {errors} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <TextFieldGroup
            error={errors.name}
            label="Name"
            onChange={this.onChange}
            value={this.state.name}
            field="name"
          />

          <TextFieldGroup
              error={errors.surname}
              label="Surname"
              onChange={this.onChange}
              value={this.state.surname}
              field="surname"
            />

        <TextFieldGroup
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            value={this.state.username}
            field="username"
          />

          <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
            type="password"
          />

          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
            type="password"
          />

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    );
  }
}


module.exports = SignupForm;
