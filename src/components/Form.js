import React, { Component } from 'react';
import Side from './sidebar';
import './Dashboard.css';
import './Login.css';
class Form extends Component{
    constructor(props) {
        super(props);
        this.state ={
           form:{ 
            name:"",
            email:""
        },
        formErrorMessage:{
        nameError:"",
        emailError:""
        },
        formValid:{
            name:false,
            email:false,
            buttonActive:false
        },
        errorMessage:"",
        successMessage:""
        };
    }
    handleSubmit = event => {
        event.preventDefault();
    }
    handleChange = event => {
          let {name,value} = event.target;
          let formDum = this.state.form;
          formDum[name]=value;
          this.setState({ form : formDum})
          this.validateField(name,value);
      }
      validateField = (fieldName, value)=>{
        let errMsg=''
        let formErrDum = this.state.formErrorMessage
        let formValidDum = this.state.formValid
        // let res=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(fieldName==="name")
        {
            if(value===""){
                errMsg="Field required";
            }
            else if(value.length<8){
                errMsg="Minimum length should be 8"
            }
            else
            errMsg="";
        formErrDum.nameError = errMsg;
        formValidDum.name = errMsg ? false : true;
      }
      if(fieldName==="email"){
          if(value===""){
              errMsg="Field required";
          }
          else
          errMsg="";
          formErrDum.emailError = errMsg;
        formValidDum.email = errMsg ? false : true;
      }
      formValidDum.buttonActive = formValidDum.name && formValidDum.email;
    this.setState({ formErrorMessage : formErrDum, formValid : formValidDum});
      }
    render(){
        let {nameError,emailError} = this.state.formErrorMessage;
    return(
        <div className="dsh">
        <div className="dashboard">
        <div>
        <Side/>
        </div>
        <div className="content1">
        <form onSubmit={this.handleSubmit}>
        <div className="form-inner">
        <h2> Hotel Booking </h2>
        <div className="form-group">
            <label>Name:</label>
            <input type="text" placeholder="Name" onChange={this.handleChange}/>
            <span className='text-danger'>{nameError}</span>
        </div>
        <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="someone@gmail.com" onChange={this.handleChange}/>
            <span className='text-danger'>{emailError}</span>
        </div>
        <div className="form-group">
            <label>Room type:</label>
            <select>
                <option>Please select</option>
                <option>AC</option>
                <option>Non-AC</option>
            </select>
        </div>
        <div className="form-group">
            <label>Number of Guests:</label>
            <select>
                <option>Please select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div className="form-group">
            <label> From Date:</label>
            <input type="date"  min="2021-09-28" max="2021-11-30" onChange={this.handleChange}/>
            
        </div>
        <div className="form-group">
        <label> To Date:</label>
            <input type="date" min="2021-09-28" max="2021-11-30" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
                <button type="submit">Book</button>
                </div>
            </div>
        </form>
        </div>
        </div>
        </div>
    
    )
}
}
export default Form;