    import { useState} from "react";
    import { UserList } from "./UserList";

    export const UserApp = () =>{

  const [endPoint, setEndPoint] = useState('users')

  /* handle nos permite cambiar la dependencia */
  const handleFetch = () => {
    setEndPoint('comments')
  }
  return <>
    <h1>lista de usuarios</h1>
    <UserList endPoint={endPoint}></UserList>
    {/* boton que nos permite cambiar el endpoint de una url */}
    <button onClick={handleFetch}>cambiar el endpoint</button>
  </>

    }