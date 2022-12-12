import React from 'react';
import './App.css';

function Signup(){
    return (
        <form>
          
      <div class='box'></div>
        <div class='s1'><h1>SIGN UP</h1></div>
        <h2>Create a new account</h2>
        <div class="input">
          <div class="input-container">
            <input class="input-field" type="text" placeholder="E-mail Address" required></input>
          </div>
          <br></br>
          <div class="input-container">
            <input class="input-field" type="text" placeholder="Create New Password" required></input>
          </div>
          <br></br>
          <div class="input-container">
            <input class="input-field" type="text" placeholder="Confirm Password" required></input>
          </div>
        </div>
        <input class="button" type="submit" value="Signup"/>
        
      


    </form>
    );

}
export default Signup;