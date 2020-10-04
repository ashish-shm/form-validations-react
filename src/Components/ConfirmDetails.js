import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export class ConfirmDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  goBack = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    let { values } = this.props;

    return (
      <>
        <div className="inputfield">
          <div>
            <TextField
              style={styles.input}
              label="Username"
              defaultValue={values.username}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={styles.input}
              label="Bio"
              defaultValue={values.bio}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={styles.input}
              label="E-mail"
              defaultValue={values.email}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={styles.input}
              label="Contact Number"
              defaultValue={values.phone}
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              style={styles.input}
              label="First Name"
              defaultValue={values.fname}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={styles.input}
              label="Last Name"
              defaultValue={values.lname}
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              style={styles.input}
              label="Address"
              defaultValue={values.address}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={styles.input}
              label="City"
              defaultValue={values.city}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              style={styles.input}
              label="Pincode"
              defaultValue={values.pin}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
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
              <button className="nextbtn" onClick={this.continue}>
                Confirm and Continue
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

export default ConfirmDetails;
