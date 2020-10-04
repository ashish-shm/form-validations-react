import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

import "../style.css";

export class PersonalDetails extends Component {
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
              onChange={handleInput("fname")}
              style={styles.input}
              label="First Name"
              defaultValue={values.fname}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("lname")}
              style={styles.input}
              label="Last Name"
              defaultValue={values.lname}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              onChange={handleInput("address")}
              style={styles.input}
              label="Address"
              defaultValue={values.address}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("city")}
              style={styles.input}
              label="City"
              defaultValue={values.city}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("pin")}
              style={styles.input}
              label="Pincode"
              defaultValue={values.pin}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("country")}
              style={styles.input}
              label="Country"
              defaultValue={values.country}
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

export default PersonalDetails;
