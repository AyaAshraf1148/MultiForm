import React, { Component } from 'react';
import UserFormDetails from './UserFormDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success'

export class UserForm extends Component {
    state={
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    //method1: proceed to next step
    nextStep=()=>{
        const {step} = this.state;
        this.setState({
            step:step+1
        });
    };

    //method2: go back to previous step
    prevStep=()=>{
        const {step} = this.state;
        this.setState({
            step:step-1
        })
    };

    //methd3: handle fields change
    handleChange=input=> e =>{
        this.setState({[input]: e.target.value});
    };


  render() {
    const { step }=this.state;
    const {firstName, lastName, email, occupation, city, bio}=this.state;
    const values = {firstName, lastName, email, occupation, city, bio}
    
    switch(step) {
        case 1:
            return(
                <UserFormDetails
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 2:
            return(
                <FormPersonalDetails
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
            )
        case 3:
            return(
                <Confirm
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            )
        case 4:
            return <Success/>
    }
  }
}

export default UserForm;

