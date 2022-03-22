import React, {useState, useEffect} from 'react';
import {api} from '../../services/api';
import { Audio } from  'react-loader-spinner'



export default function Logout()
{
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    api.get('/logout')
    .then(resp => {
      console.log(resp.data['Message'])
    })
    .catch(error => {
      var alerta = 'HTTP ERROR Code: ' + error.response.request.status +'\nError: ' + error.response.data['Error']
      alert(alerta);
    })
    .finally(() => {
      setIsLoading(false)
    })
  }, [])

  return(
    <div className="page-container">
    {
      isLoading
      ? <Audio
          height="100"
          width="100"
          color='grey'
          ariaLabel='loading'
        />
      : <h2>You have been logout</h2>
    }
    </div>
  )
}
