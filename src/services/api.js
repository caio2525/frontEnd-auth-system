import axios from "axios"

export const api = axios.create({
  baseURL: 'http://localhost:5000',
   withCredentials: true
});

export const apiPost = (url, fd, func) => {

  var retorno = api.post(url, fd)
  .then(resp => {
    console.log(resp.data)
    func()
    return true;
  })
  .catch(error => {
    var alerta = 'HTTP ERROR Code: ' + error.response.request.status +'\nError: ' + error.response.data['Error']
    alert(alerta);

    return false;

  })

  return retorno

}
