import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../style.css";

export class EducationDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  goBack = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleInput } = this.props;
    const validateResult = validate(values);
    return (
      <>
        <div className="inputfield">
          <div>
            <TextField
              onChange={handleInput("school")}
              style={styles.input}
              error={values.school.length > 3 ? undefined : "lol"}
              label="School"
              defaultValue={values.school}
              helperText={
                values.school.length > 3 ? undefined : "Enter School Name"
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("college")}
              error={values.school.length > 3 ? undefined : "E"}
              style={styles.input}
              label="College"
              defaultValue={values.college}
              helperText={
                values.school.length > 3 ? undefined : "Enter College Name"
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("postgrad")}
              style={styles.input}
              label="Post Graduation"
              defaultValue={values.postgrad}
              helperText="Enter Post Graduation details if you have"
              variant="outlined"
            />
          </div>

          <div className="flex">
            <div>
              <button className="nextbtn" onClick={this.goBack}>
                Back
              </button>
            </div>

            <div>
              {validateResult ? (
                <button className="nextbtn" onClick={this.continue}>
                  Next
                </button>
              ) : (
                <button className="errorbtn">
                  Fill out the correct details first
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const styles = {
  input: {
    marginTop: 40,
  },
};

const validate = (values) => {
  let first = values.school.length > 3;
  let second = values.college.length > 3;

  if (first && second) return true;
  else return false;
};

export default EducationDetails;
