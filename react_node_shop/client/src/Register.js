import React, {useEffect, useState} from "react";
import './App.css';
import Axios from 'axios';


function Register() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [usersList, setUsersList] = useState([]);

  useEffect(()=> {
    Axios.get('http://localhost:4000/api/selectUsers').then((response)=>
    {
      setUsersList(response.data);
    }
  )},[])

  const submitUsers = () => {
      Axios.post("http://localhost:4000/api/register", {
        username: username,
        password: password,
      }).then(() => {
        alert("successful insert");
      });
  };

  return (
    <div className="page-content"> <hr />
        <h4> Podaj dane do rejestracji:</h4>
        <input type="text" placeholder="nazwa użytkownika" 
        name="username"
        onChange={(e) => { setUsername(e.target.value);
        }}
        ></input><br></br>

        <input type="text" placeholder="hasło" 
        name="password"
        onChange={(e) => 
          { setPassword(e.target.value);
        }}
        ></input><br></br>

        <button onClick={submitUsers}> KLIKNIJ </button>
        {/* <h3> TAJNE DANE </h3> */}
         {
          
          //return <p> Login: {val.username} | Hasło: {val.password} </p>  /* wersja zabezpieczona */ usersList.map((val) =>{
          // return <div><p> Login: <span dangerouslySetInnerHTML={{"__html": val.username}} /> | Hasło <span dangerouslySetInnerHTML={{"__html": val.password}} /></p></div>  /* wersja niezabezpieczona, kod HTML w dangerouslySetInnerHTML */
          // return <div><p><a href={val.username}>Nazwa użytkownika = {val.username}. Akapit przekierowuje do ścieżki twojego użytkownika </a></p></div>; /* wersja niezabezpieczona, kod javascript w atrybucie href znacznika a*/
        }
          
    </div>
  );
}

export default Register;  