import React from 'react';
import FormInput from '../FormInput.component/Forminput';
import './Signin.styles.scss'

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ password: '', email: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h1>I already have an account</h1>
        <span>Signin with your email and password</span>

        <form action='Post' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
          />
          
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
          />
          
          <button type='submit'>Sign In</button>
        </form>
      </div>
    );
  }
}

export default Signin;
