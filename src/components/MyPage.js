import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from './NavBar.js';
import { Container, Grid, Divider } from 'semantic-ui-react'
import Gradebook from './Gradebook';


class MyPage extends Component {
  render() {
    return(
      <div>
        {this.props.isAuthed ?
          <div>
            <NavBar/>
            <Container>
              <Grid columns={1}>
                <Grid.Column>
                  <Grid.Row width={10}>
                    Profile!
                  </Grid.Row>
                  <Divider/>
                  <Grid.Row width={10}>
                    <Gradebook/>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
            </Container>
          </div>:
          <div>
            {console.log("Not logged in.. going to /login!")}
            <Redirect to="/login/#"/>
          </div>
        }
      </div>

    )
  }
}

export default MyPage;
