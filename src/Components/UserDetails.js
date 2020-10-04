import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../style.css";

export class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleInput } = this.props;
    return (
      <>
        <div className="inputfield">
          <div>
            <TextField
              onChange={handleInput("username")}
              style={styles.input}
              label="Username"
              defaultValue={values.username}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("bio")}
              style={styles.input}
              label="Bio"
              defaultValue={values.bio}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("email")}
              style={styles.input}
              label="E-mail"
              defaultValue={values.email}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("phone")}
              style={styles.input}
              label="Contact Number"
              defaultValue={values.phone}
              helperText="Incorrect entry."
              variant="outlined"
            />
          </div>
          <div>
            <button className="nextbtn" onClick={this.continue}>
              Next
            </button>
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

export default UserDetails;
