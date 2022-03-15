import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from "axios"

export default function Dash() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const url = 'http://localhost:5000/addToDo';

    const fd = new FormData();

    fd.append('item', data.item)

    console.log(data)
    const api = axios.create({
       withCredentials: true
    });

    api.post(url, fd)
    .then(resp => {
      console.log('resp', resp)
      return resp.data
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>


        <input type="text" placeholder="to do" {...register("item", {required: true})} />
        <ErrorMessage
          errors={errors}
          name="item"
          render={({ message }) => <p>Preencha esse campo</p>}
        />

        <input type="submit" />


      </form>
      <button
        onClick={() => {
          const url = 'http://localhost:5000/dash';

          const api = axios.create({
             withCredentials: true
          });

          api.get(url)
          .then(resp => {
            console.log('resp', resp)
            return resp.data
          })
          .then(resp => console.log(resp))
          .catch(error => {
            console.log('error', error)
            }
          )
          .finally(() => {
            console.log('finally')
          })
        }}
      >get To Do</button>
    </div>
  );
}
