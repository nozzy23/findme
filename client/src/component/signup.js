import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import GlobalContext from './context';
import axios from "axios";
import "../component/mainpage.css"

class Signup extends Component{

    state={
        username:"",
        unit:"",
        phoneNumber:"",
        email:"",
        password:"",
    };

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
}

signup=async ()=>{try{
   const response = await axios.post("/api/user/register",{
        username:this.state.username,
        password:this.state.password,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        unit:this.state.unit
    })
    this.context.dispatch({
        type:"signup",
        payload: response.data
    })
} catch(err){
    alert ("duplicate Account")
};
};

    render(){
        return <div class="wrapper">
        <div id="formContent">
         <h2 class="active">Create an Account</h2>
          <form>
            <input type="text" value={this.state.username} onChange={this.handleInputChange} class="fadeIn second" name="username" placeholder="Username"/>
            <input type="text" value={this.state.password} onChange={this.handleInputChange} class="fadeIn second" name="password" placeholder="Password"/>
            <input type="text" value={this.state.phoneNumber} onChange={this.handleInputChange} class="fadeIn second" name="phoneNumber" placeholder="Phone Number"/>
            <input type="text" value={this.state.email} onChange={this.handleInputChange} class="fadeIn second" name="email" placeholder="Email"/>
            <input type="text" value={this.state.unit} onChange={this.handleInputChange} class="fadeIn second" name="unit" placeholder="Unit Number"/>
        </form>
       <div id="formFooter">
      <Link to="/signup" onClick={this.signup}>Submit</Link>
      </div>  
    </div>
</div>
    }
}

Signup.contextType=GlobalContext;
export default Signup;