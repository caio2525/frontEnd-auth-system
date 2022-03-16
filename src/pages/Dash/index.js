import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import axios from "axios"
import '../../styles/index.css';
import { ToDosContainer, ToDo, ToDoName } from './styles';

export default function Dash() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const todos = [
    {
      'name': 'item item item tiem 1',
      'done': false
    },
    {
      'name': 'item 2',
      'done': true
    },
    {
      'name': 'item 3',
      'done': false
    },
    {
      'name': 'item 4',
      'done': false
    },
    {
      'name': 'item 5',
      'done': true
    },
    {
      'name': 'item 5',
      'done': true
    },
    {
      'name': 'item 5',
      'done': true
    },
    {
      'name': 'item 5',
      'done': true
    },
    {
      'name': 'item 5',
      'done': true
    },
  ]

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
    <div className="page-container">

      <form onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label className="input-label">New Todo </label>
            <input
              className="input-field"
              type="text"
              placeholder="to do"
              {...register("item",
                {
                  required: 'This field is required',

                }
              )}
            />
            <ErrorMessage
              errors={errors}
              name="item"
              render={({ message }) => <div className="error-message">{message}</div>}
            />

          <input
            className="input-button"
            value="add"
            type="submit"
          />
        </div>

      </form>

      <ToDosContainer>
        {
          todos.map((todo, key) => {
            return(
              <ToDo key={key}>
                <input
                  type="checkbox"
                  checked={todo.done}
                />
                <ToDoName done={todo.done}>{todo.name}</ToDoName>
              </ToDo>
            )
          })
        }
      </ToDosContainer>

    </div>
  );
}
