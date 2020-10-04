import React, { Component } from "react";

export class ConfirmDetails extends Component {
  render() {
    let { values } = this.props;
    let newvalues = Object.keys(values);
    newvalues.shift();

    return (
      <>
        <div>
          {newvalues.map((el) => {
            return (
              <div className="flex">
                <p>{el}</p>
                <p>{values.el}</p>
              </div>
            );
          })}
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
      </>
    );
  }
}

export default ConfirmDetails;
