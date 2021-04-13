import React from 'react';
import FormInput from '../FormInput.component/Forminput';
import './Signin.styles.scss';
import Button from '../Button.component/button';
import { signInWithGoogle } from '../../firebase/firebase.utils';
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
        <h1 className="header">I already have an account</h1>
        <span>Signin with your email and password</span>

        <form action='Post' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
          />
          <div className='buttons'>
            <Button type='submit'>Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Google SignIn
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
