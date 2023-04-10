import './Auth.css';
import Logo from '../../img/logo.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmPassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
  };

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
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? 'Sign up' : 'Login'}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstName"
                onChange={handleChange}
                value={data.firstName}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastName"
                onChange={handleChange}
                value={data.lastName}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmPassword"
                onChange={handleChange}
                value={data.confirmPassword}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? 'none' : 'block',
              color: 'red',
              fontSize: '14px',
              alignSelf: 'flex-end',
              marginRight: '5px',
            }}
          >
            * Passwords do not match
          </span>
          <div>
            <span
              style={{ fontSize: '12px', cursor: 'pointer' }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? 'Already have an account, Login'
                : "Don't have an account? Sign up"}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
