import './App.css';
import React, {useEffect, useState} from "react";
import Axios from 'axios';
import Cookies from "js-cookie";

function Login() {
  
  const [username, setUsername_log] = useState("");
  const [password, setPassword_log] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  // const { data } = await axios.get('http://localhost:4000/api/login', {withCredentials:true});


  // Axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


  const loginuser = () => {
    
    Axios.post("http://localhost:4000/api/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data.username);
      }
    });
};

    useEffect(() => {
      Axios.get("https://localhost:4000/api/login").then((response) => {
        
        if(response.data.loggedIn === true){
          
      setLoginStatus(response.data.user[0].username);
          
        }
      // 
    });
  }, []);

  return (
    <div className="page-content"><hr />
      <h4> Podaj dane do logowania:</h4>
        <input type="text" placeholder="nazwa użytkownika" 
        name="username" key="uniqueId1"
        onChange={(e) => { setUsername_log(e.target.value);
        }}
        ></input><br></br>

        <input type="password" placeholder="hasło" 
        name="password" key="uniqueId2"
        onChange={(e) => 
          { setPassword_log(e.target.value);
        }}
        ></input><br></br>

        <button onClick={loginuser}> KLIKNIJ </button>

        <p key={loginStatus}>{loginStatus}</p>
    </div>
  );
}

export default Login;  