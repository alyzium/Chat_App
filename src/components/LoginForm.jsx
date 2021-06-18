/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import axios from 'axios';
import './login_register'
import Swal from 'sweetalert2'


const projectID = 'ffe6c4c1-1eeb-428d-9b5e-8f4b62331876';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm , setPassConf] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID , 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      localStorage.setItem('passConf', passwordConfirm)

      //window.location.reload();
      setError('');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Connexion...',
        showConfirmButton: false,
        timer: 1000
      }).then(function(){
        window.location.reload();
      })
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  const handleRegister = async (e) => {
     e.preventDefault();
    
     try{

     if(password === passwordConfirm){
      var myHeaders = new Headers();
        myHeaders.append("Content-Type" , "application/json");
        myHeaders.append("PRIVATE-KEY", "{{067ca914-c6a8-4f35-8990-534bf1ed23fe}}");

       
          var raw = `{\n "username": "${username}",\n    "secret": "${password}"\n}`;

       var  requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

       await fetch("https://api.chatengine.io/users/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error))
      .then(Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your account has been created',
        showConfirmButton: false,
        timer: 1000
      }).then(function(){
        window.location.reload();
      }))
        }else{
          setError("Passwords don't match")
        }
    }catch (err) {
        setError(error);
      }
  }
  return (
    <div className="container" style={{marginTop:'5rem'}}>
<div className="formHolder">
    <div className="row">
         <div className="col-sm-6 brand">
            <a href="#" className="logo">IS <span>.</span></a>

            <div className="heading">
               <h2>Chat<a href="#" className="logo">App</a></h2>
               <p>Your Right Choice</p>
            </div>

            <div className="success-msg">
               <p>Great! You are one of our members now</p>
               <a href="#" className="profile">Your Profile</a>
            </div>
         </div>


 
         <div className="col-sm-6 form">


            <div className="login form-peice switched">
               <form className="login-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                     <label for="loginemail">Email Adderss</label>
                     <input type="text" name="loginemail" id="loginemail" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                  </div>

                  <div className="form-group">
                     <label for="loginPassword">Password</label>
                     <input type="password" name="loginPassword" id="loginPassword" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  </div>

                  <div className="CTA">
                     <input type="submit" value="Login"/>
                     <h5 style={{marginTop:'7rem'}}>{error}</h5>
                     <a href="#" className="switch">I'm New</a>
                  </div>
               </form>
            </div>


         
            <div className="signup form-peice">
               <form className="signup-form" onSubmit={handleRegister}>

                  <div className="form-group">
                     <label for="name">Full Name</label>
                     <input type="text" name="username" id="name" value={username} onChange={(e) => setUsername(e.target.value)} className="name" required/>
                  </div>

                  <div className="form-group">
                     <label for="password">Password</label>
                     <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="pass" required/>
                     <span className="error"></span>
                  </div>

                  <div className="form-group">
                     <label for="passwordCon">Confirm Password</label>
                     <input type="password" name="passwordCon" id="passwordCon" value={passwordConfirm} onChange={(e) => setPassConf(e.target.value)} className="passConfirm" required/>
                     <span className="error"></span>
                  </div>

                  <div className="CTA">
                     <input type="submit" value="Signup Now" id="submit"/>
                      <h5 style={{marginTop:'4rem'}}>{error}</h5>
                     <a href="#" className="switch">I have an account</a>
                  </div>
               </form>
            </div>
         </div>
      </div>
      </div>
      </div>

  );

};

export default LoginForm;