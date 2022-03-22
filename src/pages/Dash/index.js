import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ToDosContainer, ToDo, ToDoName } from './styles';
import {api} from '../../services/api';
import { Audio } from  'react-loader-spinner'



export default function Dash() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState({})
  const [todos, setTodos] = useState([])

  const getTodos = () => {
    api.get('/dash')
    .then(resp => {
      console.log('dash', resp.data)
      setUser({
        name: resp.data["user_name"],
        email: resp.data["user_email"]
      })
      setTodos(resp.data["todos"])
      setAuthenticated(true)
    })
    .catch(error => {
      if (error.response.request.status === 401)
      {
        setAuthenticated(false)
        return;
      }
      var alerta = 'HTTP ERROR Code: ' + error.response.request.status +'\nError: ' + error.response.data['Error']
      alert(alerta);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    getTodos()
  }, [])

  const onSubmit = data => {
    const url = 'http://localhost:5000/addToDo';

    const fd = new FormData();

    fd.append('item', data.item)

    console.log(data)


    api.post(url, fd)
    .then(resp => {
      console.log('resp', resp)
      return resp.data
    })
    .then(resp => console.log(resp))
    .catch(error => {
      console.log('error', error)
      if (error.response.request.status === 401)
      {
        setAuthenticated(false)
        return;
      }
      var alerta = 'HTTP ERROR Code: ' + error.response.request.status +'\nError: ' + error.response.data['Error']
      alert(alerta);

    })
    .finally(() => {
      console.log('finally')
      getTodos()
    })

  };


  return (
    <div className="page-container">
      {
        isLoading
        ? <Audio
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
          />
        : authenticated
          ? <div>
              <div>
                <h2>You are authenticated</h2>
                <p>{`User: ${user.name}`}</p>
                <p>{`Email: ${user.email}`}</p>
              </div>
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
                todos
                ? todos.map((todo, key) => {
                    return(
                      <ToDo key={key}>
                        <input
                          type="checkbox"
                          checked={todo.done}
                          onChange={(event) => {
                            var newTodo = {
                              ...todo,
                              done: !todo.done
                            }
                            var newTodos = todos;
                            newTodos[key] = newTodo
                            setTodos([...newTodos])
                            //console.log('event', event)
                            //console.log('newTodo', newTodo)
                            //console.log('newTodos', newTodos)
                          }}
                        />
                        <ToDoName done={todo.done}>{todo.name}</ToDoName>
                      </ToDo>
                    )
                  })
                :null
              }
              </ToDosContainer>


            </div>
          : <div>
              <h2>You are unauthenticated</h2>
              <p>Login first</p>
            </div>

      }

    </div>
  );
}
