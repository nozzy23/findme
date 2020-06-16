import React,{Component} from 'react';
import GlobalContext from './context';
import {Link} from 'react-router-dom';
import Api from '../api';
import "../component/mainpage.css"

class Login extends Component{

    state={
        username:"",
        password:"",
    };
    
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    login=(event)=>{
        event.preventDefault();
        if(!this.state.username||!this.state.password) {
            alert("Please enter your username and password");
        } else {
            Api.login(this.state.username,this.state.password,(user)=>{
                debugger;
                if(user) {
                    this.context.dispatch({type:"login",payload:user})
                } else {
                    alert("Invalid credentials!!")
                    console.log(user)
                }
                
            })
        }
    }

render(){
    return <div class="wrapper">
    <div id="formContent">
     <h2 class="active">Find Me A Parking</h2>
      
  <form>
        <input type="text" value={this.state.username} onChange={this.handleInputChange} class="fadeIn second" name="username" placeholder="Username"/>
        <input type="text" value={this.state.password} onChange={this.handleInputChange} class="fadeIn third" name="password" placeholder="Password"/>
        <input type="submit"  onClick={this.login} class="fadeIn fourth" value="Log In"/>
        </form>
    <div id="formFooter">
      <Link to="/signup"> Create  Account</Link>
      </div>
  
    </div>
  </div>
    }
}


Login.contextType=GlobalContext;

export default Login;