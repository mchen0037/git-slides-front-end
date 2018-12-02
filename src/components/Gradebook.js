import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'


class Gradebook extends Component {
  render() {
    return(
      <div>
        {/* FIXME: switch rows and columns? */}
        <Grid columns={2}>
          <Grid.Column>
            {this.props.grades.map((grade, index) =>
              <Grid.Row key={index}>
                <b>{grade.title}</b>
              </Grid.Row>
            )}
          </Grid.Column>
          <Grid.Column>
            {this.props.grades.map((grade, index) =>
              <Grid.Row key={index}>
                {grade.grade}%
              </Grid.Row>
            )}
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}

export default Gradebook;
