import React, { Component } from 'react';
import './App.css';

import TextInput from './forms/TextInput';
import validate from './forms/validate';
import TextArea from './forms/TextArea';
import Email from './forms/Email';
import Password from './forms/Password';
import Select from './forms/Select';
import Radio from './forms/Radio';
import Checkbox from './forms/Checkbox';

class App extends Component {

  constructor() {
    super();

    this.state = {
      formIsValid: false,
      formControls: {

        name: {
          value: '',
          placeholder: 'What is your name?',
          valid: false,
          validationRules: {
            minLength: 3,
            isRequired: true
          },
          touched: false
        },
        my_email: {
          value: '',
          placeholder: 'What is your email?',
          valid: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          },
          touched: false
        },
        my_password: {
          value: '',
          placeholder: 'What is your password?',
          valid: false,
          validationRules: {
            minLength: 6,
            isRequired: true
          },
          touched: false
        },
        gender: {
          value: '',
          placeholder: 'What is your gender?',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: '', displayValue: 'Select your gender?'},
            { value: 'male', displayValue: 'Male' },
            { value: 'female', displayValue: 'Female' }
          ]
        },
        my_radio: {
          value: '',
          placeholder: 'Are you a frontend developer?',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 0, displayValue: 'No' },
            { value: 1, displayValue: 'Yes' }
          ]
        },
        my_box: {
          value: '',
          placeholder: 'Are you a frontend developer?',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
          },
          options: [
            { value: 0, displayValue: 'No' },
            { value: 1, displayValue: 'Yes' }
          ]
        },
        message: {
          value: '',
          placeholder: 'What is your message?',
          valid: false,
          validationRules: {
            minLength: 5,
            isRequired: true
          },
          touched: false
        }
      }
    }
  }


  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }

    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });

  }


  formSubmitHandler = () => {
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value
    }
    console.dir(formData);
  }


  render() {

    return (
      <div className="App">
        <TextInput name="name"
          placeholder={this.state.formControls.name.placeholder}
          value={this.state.formControls.name.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.name.touched}
          valid={this.state.formControls.name.valid}
        />
        <Email name="my_email"
          placeholder={this.state.formControls.my_email.placeholder}
          value={this.state.formControls.my_email.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.my_email.touched}
          valid={this.state.formControls.my_email.valid}
        />
        <Password name="my_password"
          placeholder={this.state.formControls.my_password.placeholder}
          value={this.state.formControls.my_password.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.my_password.touched}
          valid={this.state.formControls.my_password.valid}
        />
        <Select name="gender"
          value={this.state.formControls.gender.value}
          onChange={this.changeHandler}
          options={this.state.formControls.gender.options}
          touched={this.state.formControls.gender.touched}
          valid={this.state.formControls.gender.valid}
        />
        <Radio name="my_radio"
          value={this.state.formControls.my_radio.value}
          onChange={this.changeHandler}
          options={this.state.formControls.my_radio.options}
          touched={this.state.formControls.my_radio.touched}
          valid={this.state.formControls.my_radio.valid}
        />
        <Checkbox name="my_box"
          value={this.state.formControls.my_box.value}
          onChange={this.changeHandler}
          options={this.state.formControls.my_box.options}
          touched={this.state.formControls.my_box.touched}
          valid={this.state.formControls.my_box.valid}
        />
        <TextArea name="message"
          placeholder={this.state.formControls.message.placeholder}
          value={this.state.formControls.message.value}
          onChange={this.changeHandler}
          touched={this.state.formControls.message.touched}
          valid={this.state.formControls.message.valid}
        />
        <br />
        <button onClick={this.formSubmitHandler}
          disabled={!this.state.formIsValid}
          className="btn"
        >
          Submit
          </button>
      </div>
    );

  }
}

export default App;