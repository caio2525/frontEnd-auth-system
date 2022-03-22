import React, {useState, createContext} from 'react';

export const UserContext = createContext({})

export default function UserContextProvider({children})
{
  const [user, setUser] = useState(null)
  const [todos, setTodos] = useState({})


  return(
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
          todos: todos,
          setTodos: setTodos
        }}
      >
        {children}
      </UserContext.Provider>
  )
}
