import './Auth.css';
import Logo from '../../img/logo.png';
import { useState } from 'react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="Auth">
      <div className="a-left">
        {/* Left side*/}
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explor the ideas through the world</h6>
        </div>
      </div>
      {/* right side*/}
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? 'Sign up' : 'Login'}</h3>
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstName"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastName"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="infoInput"
              name="confirmPassword"
            />
          </div>
          <div>
            <span style={{ fontSize: '12px' }}>
              Already have an account, Login
            </span>
          </div>
          <button className="button infoButton">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
