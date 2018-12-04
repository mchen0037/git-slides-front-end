import React, { Component } from 'react';

class BodyContent extends Component {
  render() {
    // console.log("BodyContent props:", this.props)
    return(
      <div>
        <div>
          {
            //FIXME: need to render more than just one slide later lol
            this.props.slides[0] &&
            <h2>{this.props.slides[0].slide_code}</h2>
          }
        </div>
        <div>
          {
            this.props.exercise[0] &&
            <h1> {this.props.exercise[0].exercise_instructions} </h1>
          }
        </div>
        <div>
          {

          }
        </div>
      </div>

    )
  }
}

export default BodyContent;
