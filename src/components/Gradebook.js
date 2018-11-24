import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'


class Gradebook extends Component {
  render() {
    return(
      <div>
        {/* FIXME: switch rows and columns? */}
        <Grid columns={2}>
          <Grid.Column>
            <Grid.Row>
              <b>CSE 165</b>
            </Grid.Row>
            <Grid.Row>
              <b>CSE 111</b>
            </Grid.Row>
            <Grid.Row>
              <b>Math 180</b>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              82.4%
            </Grid.Row>
            <Grid.Row>
              89.3%
            </Grid.Row>
            <Grid.Row>
              96.3%
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>

    )
  }
}

export default Gradebook;
