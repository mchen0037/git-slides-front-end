import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import SideNav from './SideNav.js';
import NavBar from './NavBar.js';
import BodyContent from './BodyContent.js';
import { Container, Header, Segment } from 'semantic-ui-react'
import {Grid} from 'semantic-ui-react';


class Home extends Component {
  render() {
    // console.log("Home props:", this.props)
    // TODO: Different look if it's an exercise or if it's a Slide?
    return(
      <div>
        {this.props.isAuthed ?
          <div>
            <NavBar/>
            <Container>
              <Grid>
                <Grid.Row width={10}>
                  {/* FIXME: This might break with a lot of modules. */}
                  <Grid.Column width={4} style={{overflow: 'auto', maxHeight: 600 }}>
                    <SideNav/>
                  </Grid.Column>
                  <Grid.Column width={12} style={{overflow: 'auto', maxHeight: 600 }}>
                    <BodyContent/>
                  </Grid.Column>
                </Grid.Row>
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

export default Home;
