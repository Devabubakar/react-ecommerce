import React from 'react';
import FormInput from '../form.input/form.input.component';
import './signin.styles.scss';
import Button from '../button/button.component';
import { signInWithGoogle , auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      
    };

   
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const user = await auth.signInWithEmailAndPassword(this.state.email,this.state.password)
      await createUserProfileDocument(user)
      this.setState({email:'',password:''})

    }catch(error){
      console.log(error)
    }
    this.setState({ password: '', email: '' });
  };

  
  render() {
    return (
      <div className='sign-in'>
        <h1>WELCOME BACK</h1>
        <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>

        <form action='Post' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={ this.handleChange}
            label='Email'
          />
          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={ this.handleChange}
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
