import React, { Component } from 'react';
import { Grid, Image, Segment, Header } from 'semantic-ui-react'

var picture = '../assets/img/deafult_picture.png'

class Gradebook extends Component {
  render() {
    return(
      <div>
        <Segment>
          <Grid columns={2}>
            <Grid.Column width={2}>
              <Grid.Row>
                {/* FIXME: Image not working? */}
                <Image src={picture} size='small' circular />
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={14}>
              <Grid.Row>
                <Header>
                  Mighty Chen
                </Header>
              </Grid.Row>
              <Grid.Row>
                Email: mchen73@ucmerced.edu
              </Grid.Row>
              <Grid.Row>
                Student Standing: Senior
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>

    )
  }
}

export default Gradebook;
