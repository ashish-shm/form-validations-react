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
    var regName = /^[a-zA-Z]+$/;
    const validateResult = validate(values);

    return (
      <>
        <div className="inputfield">
          <div>
            <TextField
              onChange={handleInput("fname")}
              error={
                values.fname.length > 3 && regName.test(values.fname)
                  ? undefined
                  : "lol"
              }
              style={styles.input}
              label="First Name"
              defaultValue={values.fname}
              helperText={
                values.fname.length > 5
                  ? undefined
                  : "Enter atleast 5 characters"
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("lname")}
              error={
                values.lname.length > 3 && regName.test(values.lname)
                  ? undefined
                  : "lol"
              }
              style={styles.input}
              label="Last Name"
              defaultValue={values.lname}
              helperText={
                values.lname.length > 5
                  ? undefined
                  : "Enter atleast 5 characters"
              }
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              onChange={handleInput("address")}
              error={values.address.length > 5 ? undefined : "lol"}
              style={styles.input}
              label="Address"
              defaultValue={values.address}
              helperText={
                values.address.length > 5 ? undefined : "Enter address"
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("city")}
              error={values.city.length > 3 ? undefined : "lol"}
              style={styles.input}
              label="City"
              defaultValue={values.city}
              helperText={values.city.length > 3 ? undefined : "Enter address"}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("pin")}
              error={values.pin.length === 6 ? undefined : "lol"}
              style={styles.input}
              label="Pincode"
              defaultValue={values.pin}
              helperText={
                values.pin.length === 6 ? undefined : "Enter a valid pincode"
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("country")}
              style={styles.input}
              label="Country"
              defaultValue={values.country}
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
  console.log(values);
  var regName = /^[a-zA-Z]+$/;
  let first = values.fname.length > 3 && regName.test(values.fname);
  let second = values.lname.length > 3 && regName.test(values.lname);
  let third = values.pin.length === 6;

  if (first && second && third) return true;
  else return false;
};

export default PersonalDetails;
