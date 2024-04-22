import React, { useState } from 'react';

import { Row, Col } from 'reactstrap';
import DashNavbar from '../../../layout/DashNavbar';
import DashMenuBar from '../AdminDashMenuBar';
import UserFunctions from '../../../../Axios/UserAxios';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

const ChangePassword = () => {
  const [state, setState] = useState('');
  const history = useHistory();

  const { register, handleSubmit, errors, getValues } = useForm();

  const changepassword = () => {
    console.log(state);
    const user = sessionStorage.getItem('user');
    const temp = JSON.parse(user);
    const email = temp['email'];
    console.log(email);
    const body = {
      email: email,
      password: state,
    };

    UserFunctions.changePassword(body).then((res) => {
      console.log(res.data);

      history.push('/');
    });
  };

  return (
    <div>
      <DashNavbar />
      <div className="py-5">
        <Row>

          <DashMenuBar />

          <Col md={4}>
          </Col>
          <Col md={4}>
            <br></br>
            <br></br>
            <div>
              <h4 className="pt-4 mt-3 text-center">Change Password</h4>
              <br></br>
              <br></br>

              <div className="text-center">
                <img src='/images/project images/changepassword.jfif' className="img-fluid" alt="password Image" />
              </div><br></br><br></br>

              <div className="form-group input-group pl-4">
                <h5>Old Password :</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <input type="password" style={{ width: 260, height: 40 }}></input>
              </div>
              <div className="form-group input-group pl-4">
                <h5>New Password : </h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <input
                  type="password"
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  className={classNames('form-control', {
                    'is-invalid': errors.password,
                  })}
                  name="password"
                  id="password"
                  ref={register({
                    required: 'this field is required.',
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                      message:
                        '6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.',
                    },
                  })} ></input>
                {errors.password && (
                  <div className="invalid-feedback">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div className="form-group input-group pl-4">
                <h5>Confirm Password :</h5>
                <div
                  dangerouslySetInnerHTML={{
                    __html: ' &nbsp &nbsp',
                  }}></div>
                <input
                  type="password"
                  style={{ width: 100 }}
                  className={classNames('form-control', {
                    'is-invalid': errors.confirm_password,
                  })}
                  placeholder="Confirm Your Password"
                  name="confirm_password"
                  ref={register({
                    required: 'this field required.',
                    validate: (value) =>
                      value === getValues('password') ||
                      "password doesn't match.",
                  })}></input>
                {errors.confirm_password && (
                  <div className="invalid-feedback">
                    {errors.confirm_password.message}
                  </div>
                )}
              </div>

              <br></br>
              <div className="form-group">
                <center>
                  <button
                    // onClick={changepassword}
                    onClick={handleSubmit(changepassword)}
                    type="submit"
                    className="btn btn-primary btn-block"
                    style={{ maxWidth: 200 }}>
                    Submit
                  </button>
                </center>
              </div>
            </div>
          </Col>
          <Col md={4}>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ChangePassword;
