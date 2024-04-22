import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import UserFunctions from '../../Axios/UserAxios';
import classNames from 'classnames';

const Customer = () => {
  const history = useHistory();
  const { register, handleSubmit, errors, getValues } = useForm();

  const onRegister = (data) => {
    if (Object.keys(errors).length > 0) {
      alert('Please fix the errors in the form.');
      return;
    }

    const { name, email, mobile, password } = data;

    const add = {
      name: name,
      mobileNumber: mobile,
      email: email,
      password: password,
    };

    UserFunctions.registerCustomer(add).then((res) => {
      history.push('/login');
    });
  };

  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-6' style={{ paddingTop: '100px' }}>
            <img
              src='/images/project images/Steam wash _ Eco Car Spa_files/registrationImages.jpg'
              className='img-fluid'
              alt='Registration Image'
            />
          </div>
          <div className='col-6'>
            <article
              className='card-body w-100 mx-auto'
              style={{ maxWidth: 500 }}
            >
              <h1 className='card-title mt-3 text-center'>USER</h1>
              <p className='text-center'>Get started with your free account</p>
              <form onSubmit={handleSubmit(onRegister)}>
                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fa fa-user'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className={classNames('form-control', {
                      'is-invalid': errors.name,
                    })}
                    name='name'
                    ref={register({
                      required: 'Full name is required.',
                      pattern: {
                        value: /^[a-zA-Z\s]*$/,
                        message: 'Please enter a valid full name.',
                      },
                    })}
                  ></input>
                  {errors.name && (
                    <div className='invalid-feedback'>{errors.name.message}</div>
                  )}
                </div>

                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fa fa-envelope'></i>
                    </span>
                  </div>
                  <input
                    type='text'
                    className={classNames('form-control', {
                      'is-invalid': errors.email,
                    })}
                    placeholder='E-mail Address'
                    name='email'
                    ref={register({
                      required: 'This field is required.',
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/,
                        message: 'Please enter a valid e-mail address.',
                      },
                    })}
                  ></input>
                  {errors.email && (
                    <div className='invalid-feedback'>{errors.email.message}</div>
                  )}
                </div>

                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fa fa-phone'></i>
                    </span>
                  </div>
                  <select className='custom-select' style={{ maxWidth: 80 }}>
                    <option selected=''>+91</option>
                  </select>
                  <input
                    className={classNames('form-control', {
                      'is-invalid': errors.mobile,
                    })}
                    name='mobile'
                    placeholder='Mobile Number'
                    type='text'
                    ref={register({
                      required: 'This field is required.',
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: 'Please enter a valid 10 digit mobile number.',
                      },
                    })}
                  ></input>
                  {errors.mobile && (
                    <div className='invalid-feedback'>{errors.mobile.message}</div>
                  )}
                </div>

                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fa fa-lock'></i>
                    </span>
                  </div>
                  <input
                    type='password'
                    className={classNames('form-control', {
                      'is-invalid': errors.password,
                    })}
                    placeholder='Enter Your Password'
                    name='password'
                    ref={register({
                      required: 'This field required.',
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,20}$/                        ,
                        message:
                          '6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.',
                      },
                    })}
                  ></input>
                  {errors.password && (
                    <div className='invalid-feedback'>
                      {errors.password.message}
                    </div>
                  )}
                </div>

                <div className='form-group input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text'>
                      <i className='fa fa-lock'></i>
                    </span>
                  </div>
                  <input
                    type='password'
                    className={classNames('form-control', {
                      'is-invalid': errors.confirm_password,
                    })}
                    placeholder='Confirm Your Password'
                    name='confirm_password'
                    ref={register({
                      required: 'This field required.',
                      validate: (value) =>
                        value === getValues('password') ||
                        "password doesn't match.",
                    })}
                  ></input>
                  {errors.confirm_password && (
                    <div className='invalid-feedback'>
                      {errors.confirm_password.message}
                    </div>
                  )}
                </div>

                <div className='form-group'>
                  <button type='submit' className='btn btn-success btn-block'>
                    CREATE ACCOUNT
                  </button>
                </div>
                <p className='text-center'>
                  Have an account? <a href='/login'>Log In</a>
                </p>
              </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
