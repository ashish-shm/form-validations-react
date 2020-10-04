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
    return (
      <>
        <div className="inputfield">
          <div>
            <TextField
              onChange={handleInput("school")}
              style={styles.input}
              label="School"
              defaultValue={values.school}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("college")}
              style={styles.input}
              label="College"
              defaultValue={values.college}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("postgrad")}
              style={styles.input}
              label="Post Graduation"
              defaultValue={values.postgrad}
              helperText="Incorrect entry."
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
              <button className="nextbtn" onClick={this.continue}>
                Next
              </button>
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

export default EducationDetails;
