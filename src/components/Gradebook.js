import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'


class Gradebook extends Component {
  render() {
    return(
      <div>
        <Grid columns={2}>
          <Grid.Column>
            <Grid.Row>
              CSE 165
            </Grid.Row>
            <Grid.Row>
              CSE 111
            </Grid.Row>
            <Grid.Row>
              Math 180
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
