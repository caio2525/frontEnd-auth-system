import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from "axios"

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    const url = 'http://localhost:5000/signup';

    const fd = new FormData();

    fd.append('userName', data.userName)
    fd.append('userEmail', data.userEmail)
    fd.append('userPassword', data.userPassword)

    console.log(data)

    axios.post(url, fd)
    .then(resp => {
      console.log('resp', resp)
      return(resp.data)
    })
    .then(resp => console.log(resp))
    .catch(error => {
      console.log('error', error)
      }
    )
    .finally(() => {
      console.log('finally')
    })

  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input type="text" placeholder="User Name" {...register("userName", {required: true, maxLength: 80})} />
      <ErrorMessage
        errors={errors}
        name="User Name"
        render={({ message }) => <p>{message}</p>}
      />

      <input type="text" placeholder="Email" {...register("userEmail", {required: true, pattern: /^\S+@\S+$/i})} />
      <ErrorMessage
        errors={errors}
        name="Email"
        render={({ message }) => <p>Verifique o email</p>}
      />

      <input type="password" placeholder="Password" {...register("userPassword", {required: true, max: 80})} />
      <ErrorMessage
        errors={errors}
        name="Password"
        render={({ message }) => <p>{message}</p>}
      />

      <input type="submit" />
    </form>
  );
}
