import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "../style.css";

export class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();

    this.props.nextStep();
  };

  validate = () => {
    const { values } = this.props;
    if (values.username.length > 6) return true;
    else return false;
  };

  render() {
    const { values, handleInput } = this.props;
    const validateResult = validate(values);
    const re = /\S+@\S+\.\S+/;
    return (
      <>
        <div className="inputfield">
          <div>
            <TextField
              onChange={handleInput("username")}
              error={values.username.length < 6 ? "gsag" : undefined}
              style={styles.input}
              label="Username"
              defaultValue={values.username}
              helperText={
                values.username.length < 6
                  ? "Enter atleast 6 characters"
                  : undefined
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("bio")}
              error={values.bio.length < 6 ? "gsag" : undefined}
              style={styles.input}
              label="Bio"
              defaultValue={values.bio}
              helperText={
                values.bio.length < 6 ? "Enter atleast 6 characters" : undefined
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("email")}
              error={re.test(values.email) ? undefined : "lol"}
              style={styles.input}
              label="E-mail"
              defaultValue={values.email}
              helperText={
                re.test(values.email) ? undefined : "Enter a valid email"
              }
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              onChange={handleInput("phone")}
              error={values.phone.length === 10 ? undefined : "lol"}
              style={styles.input}
              label="Contact Number"
              defaultValue={values.phone}
              helperText={
                values.phone.length === 10
                  ? undefined
                  : "Enter a valid mobile number"
              }
              variant="outlined"
            />
          </div>
          <div>
            {" "}
            {validateResult ? (
              <button className="nextbtn" onClick={this.continue}>
                Next
              </button>
            ) : (
              <button className="errorbtn">Fill out the details first</button>
            )}
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
  const re = /\S+@\S+\.\S+/;
  let first = values.username.length > 6;
  let second = values.bio.length > 6;
  let third = re.test(values.email) ? true : false;
  let fourth = values.phone.length === 10;
  if (first && second && third && fourth) return true;
  else return false;
};

export default UserDetails;
