import React, { Component } from "react";
import './login_student.css'



class Nav extends Component {
render() {
    return (
      <nav>
        <a  class="selected">
          Therapywind<i class="fas fa-leaf"></i><img src={window.location.origin + 'download.png'} />
        </a>
               <a  id="account" >{this.props.account}</a>
           
         
      </nav>

    );
  }
}

export default Nav;

