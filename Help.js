import React from 'react';
import './Help.css';

function Help(){
    return(
        <form>
            <div class='body'></div>
            <div class='box'></div>
            <div class='s1'><h1>Help & Support</h1></div>
            <div class='header'>
          </div>
                <div class='header1'></div>
                <div class='head1'> <h1>Carzspott</h1></div>
                <div class='head2'> <h1>Enquiry Form</h1></div>
                <div class='inputH'>
                <div class="input-containerH">
            <input class="input-fieldH" type="text" placeholder="Name" required></input>
          </div>
          <br></br>
          <div class="input-containerH">
            <input class="input-fieldH" type="text" placeholder="Contact Number" required></input>
          </div>
          <br></br>
          <div class='inputHE'>
            <div class="input-containerHE">
                <input class="input-fieldHE" type="text" placeholder="E-mail" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHE'>
                <div class="input-containerHE">
                <input class="input-fieldHE" type="text" placeholder="Car Model" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHEL'>
                <div class="input-containerHEL">
                <input class="input-fieldHEL" type="text" placeholder="City (or) State" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHEL'>
                <div class="input-containerHEL">
                <input class="input-fieldHEL" type="text" placeholder="Car Variant" required></input>
                </div>
                </div>
                <br></br>
                <div class='inputHELP'>
                <div class="input-containerHELP">
                <input class="input-fieldHELP" type="text" placeholder="Enter Description" required></input>
                </div>
                </div>
          </div>
        </form>
    );
}
export default Help;