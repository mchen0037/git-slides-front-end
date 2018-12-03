import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
let server = "http://0.0.0.0:4000";


class Gradebook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      grades: this.props.grades
    }
  }

  async getGrades(user_id){
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get(server +
      "/gradebook?user_id=" + user_id);
    // The result of the GET request is available in the json variable.
    // We return it just like in a regular synchronous function.
    return json;
  }

  async componentDidMount() {
    console.log("componentDidMount");
    let user_id = this.props.user.id;
    let request = this.getGrades(user_id);
    request.then( res => {
      console.log(res.data)
      this.setGrades(res.data);
    });
  }

  //Wny do I need to create a separate function for this...?
  setGrades(grades) {
    this.setState({grades: grades})
  }

  render() {
    console.log("Gradebook state:", this.state)
    return(
      <div>
        {/* FIXME: switch rows and columns? */}
        <Grid columns={2}>
          <Grid.Column>
            {this.state.grades.map((grade, index) =>
              <Grid.Row key={index}>
                <b>{grade.course_name}</b>
              </Grid.Row>
            )}
          </Grid.Column>
          <Grid.Column>
            {this.state.grades.map((grade, index) =>
              <Grid.Row key={index}>
                {grade.grade * 100}%
              </Grid.Row>
            )}
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}

export default Gradebook;
