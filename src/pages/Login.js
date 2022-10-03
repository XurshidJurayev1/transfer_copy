import React, { useEffect, useState } from 'react';
import './Logon.scss';
import { connect } from 'react-redux';
import { fetchLogin, getUserInfo, login, userInfo, userLogin } from '../action';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';


const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const token = props.token;

  useEffect(() => {


    if (props.token.length > 0) {
      navigate('/admin/info');

    }
    console.log('asdas');

  }, [props.token]);


  const submit = (e) => {
    e.preventDefault();
    // props.fetchLogin({ email, password });
    props.userLogin({ login: email, password });
    // props.userInfo({ login: email, password, token });

  };

  if (token) {
    localStorage.setItem('token', JSON.stringify(token));
    props.getUserInfo({ token });
  }


  return (<div className="login">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="" content="" />
      <title>UzPay | Login</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div className="container">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="login__form mt-5">
            <div className="col-md-10 m-auto">
              <form className="login__formMain p-5" onSubmit={submit}>
                <h1 className="login__title mb-2">Welcome on board!</h1>
                <div className="form-group login__group">
                  <i className="fa-solid fa-at"></i>
                  <input
                    placeholder="Enter Email Address..."
                    type="text"
                    className="login__input form-control form-control-user"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group login__group">
                  <i className="fa-solid fa-key"></i>
                  <input
                    placeholder="Password"
                    type="password"
                    className="login__input form-control form-control-user"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="login__btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>);
};

const mapStateToProps = (state) => {
  return {
    token: state.token, role: state.role, // user: state.user,
    error: state.error,
  };
};

export default connect(mapStateToProps, { login, fetchLogin, userLogin, userInfo, getUserInfo })(Login);
