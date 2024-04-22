import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../login.css';
import Navbar from '../layout/Navbar';
import UserFunctions from '../../Axios/UserAxios';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

const Login = () => {
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const onLogin = (data) => {
    const email = data.email;
    const pass = data.password;

    const emailandpass = {
      email: email,
      password: pass,
    };

    UserFunctions.login(emailandpass).then((res) => {
      console.log(res.data);
      console.log('hii');
      sessionStorage.setItem('user', JSON.stringify(res.data));
      if (res.data.role === 'ADMIN')
        history.push('/admin-dash');
      else if (res.data.role === 'CUSTOMER')
        history.push('/customer-dash');
      else if (res.data.role === 'SERVICEADVISOR')
        history.push('/serviceadvisor-dash');
      else if (res.data.role === 'MECHANIC' && res.data.active == true)
        history.push('/mechanic-dash');
      else if (res.data.role === 'MECHANIC' && res.data.active == false)
        history.push('/mechanic-show');
    });
  };

  return (
    <div>
      <Navbar />
      <div id="login">
        <h3 className="text-center text-dark pt-5  ">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center">
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="login-form"
                  className="form"
                  onSubmit={handleSubmit(onLogin)}>
                  <h3 className="text-center my-text" id="my-text">Login</h3>
                  <div className="form-group">
                    <label htmlFor="email" id="my-text">
                      Email Address :
                    </label>
                    <br></br>
                    <input
                      type="text"
                      className={classNames('form-control', {
                        'is-invalid': errors.email,
                      })}
                      id="email"
                      name="email"
                      ref={register({
                        required: 'Email is required.',
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
                          message: 'Please enter a valid email address.',
                        },
                      })}></input>
                    {errors.email && (
                      <div className="invalid-feedback">
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" id="my-text" >
                      Password :
                    </label>
                    <br></br>
                    <input
                      type="password"
                      className={classNames('form-control', {
                        'is-invalid': errors.password,
                      })}
                      name="password"
                      id="password"
                      ref={register({
                        required: 'Password is required.',
                      })}></input>
                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" id="my-text">
                      <span>Remember me</span>
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"></input>
                      </span>
                    </label>
                    <br></br>
                    <input
                      style={{ marginLeft: 190 }}
                      type="submit"
                      name="submit"
                      className="btn btn-primary"
                      value="submit"></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br/><br/> <br/><br/>
      </div>
    </div>
  );
};
export default Login;