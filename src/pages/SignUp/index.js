import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import '../../styles/index.css';
import Form from '../../components/Form';

import {apiPost} from '../../services/api';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = data => {

    const fd = new FormData();

    fd.append('userName', data.userName)
    fd.append('userEmail', data.userEmail)
    fd.append('userPassword', data.userPassword)

    console.log(data)

    const func = () => navigate('/dash')
    apiPost('/signup', fd, func)


  };

  return (
    <div className="page-container">

      <Form title="Sign Up" onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label className="input-label">User Name</label>
          <input
            className="input-field"
            type="text"
            placeholder="Digite seu Nome"
            {...register("userName", {required: 'This field is required'})} />
          <ErrorMessage
            errors={errors}
            name="userName"
            render={({ message }) => <div className="error-message">{message}</div>}
          />
        </div>

        <div className="form-group">
          <label className="input-label">User Email</label>
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            {...register("userEmail",
              {
                required: 'This field is required',

              }
            )}
          />
          <ErrorMessage
            errors={errors}
            name="userEmail"
            render={({ message }) => <div className="error-message">{message}</div>}
          />
        </div>

        <div className="form-group">
          <label className="input-label">Password</label>
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            {...register("userPassword",
              {
                required: 'This field is required',
                minLength :{
                  value: 4,
                  message: 'The password must be 4 characters or longer' // JS only: <p>error message</p> TS only support string
                }
              }
            )}
          />
          <ErrorMessage
            errors={errors}
            name="userPassword"
            render={({ message }) => <div className="error-message">{message}</div>}
          />
        </div>

        <input
          value="Submit"
          className="input-button"
          type="submit"
        />

      </Form>
    </div>
  );
}
