import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


const Login=()=> {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isMissedLogin, setIsMissedLogin] = useState(false);
  const [user, setUser] = useState({});

  const handleLogin = () => {
    axios.get("http://localhost:3000/users").then((ress) => {
      setUser({username: ress.data[0].username, password: ress.data[0].password})
      });
    console.log('user: ',user);
    (username === user.username && password === user.password) ? navigate("/todo-app") : setIsMissedLogin(true);
  };

  return (
    <>
      <div id='login'>
        <h1>LOGIN</h1>
        <TextField
            required
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            error={isMissedLogin}
          />
          <TextField
            required
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={isMissedLogin}
          />
        <Button variant="contained" onClick={handleLogin} >LOGIN</Button>
      </div>
      {isMissedLogin ? (<div><Alert severity="error">Your login credentions are incorect! Please try again.</Alert></div>) : (<></>)}
    </>
  );
}


export default Login;