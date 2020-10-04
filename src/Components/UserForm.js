import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import ConfirmDetails from "./ConfirmDetails";
import { Header } from "./Header";

export class UserForm extends Component {
  state = {
    step: 1,
    username: "",
    bio: "",
    email: "",
    phone: "",
    country: "India",
  };

  nextStep = () => {
    let { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    let { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleInput = (input) => (e) => this.setState({ [input]: e.target.value });

  render() {
    const { step } = this.state;
    const values = this.state;

    switch (step) {
      case 1:
        return (
          <>
            <Header title="Profile Information" />
            <UserDetails
              nextStep={this.nextStep}
              handleInput={this.handleInput}
              values={values}
            />
          </>
        );
      case 2:
        return (
          <>
            <Header title="Personal Information" />
            <PersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleInput={this.handleInput}
              values={values}
            />
          </>
        );
      case 3:
        return (
          <>
            <Header title="Education Information" />
            <EducationDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleInput={this.handleInput}
              values={values}
            />
          </>
        );
      case 4:
        return (
          <>
            <Header title="Confirm Details" />
            <ConfirmDetails
              values={values}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          </>
        );

      case 5:
        return <Header title="Success" />;
    }
  }
}

export default UserForm;
