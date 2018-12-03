import React, { Component } from 'react';
import { Menu, Accordion } from 'semantic-ui-react';
import axios from 'axios';

let server = "http://172.20.10.2:4000"

class SideNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeModule: -1,
      activeItem: -1,
      course_id: this.props.course_id,
      course: this.props.user.courses[0],
      modules: this.props.modules,
      presentations: [],
      exercises: []
    }
    this.handleModuleClick = this.handleModuleClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleModuleClick(e, clickedModule) {
    //If we click on the same as the active module, close the accordion folder
    //Else, we want to set it to the new one.
    const index = clickedModule.index
    const activeModule = this.state.activeModule
    const newIndex = (activeModule === index) ? -1 : index

    // console.log(index)
    // console.log(activeModule)
    // console.log(newIndex)
    // console.log(this.props)
    if (newIndex !== -1) {
      let module_id = this.props.user.modules[newIndex].module_id;
      //fix this hardcoded 0 because you need to pass in the selected course id.
      let course_id = this.props.user.courses[0].id;
      let user_id = this.props.user.id;

      axios.get(server + "/exercise?user_id=" + user_id +
      "&course_id=" + course_id +
      "&module_id=" + module_id)
        .then(function(res){
          // console.log("EXERCISES:", res.data)
          // console.log("NavBar/courseClicked I GOT THE MODULES:", res.data)
          // this.props.updatemods(res.data)
          // console.log("setMods called.")
        });

      axios.get(server + "/presentation?user_id=" + user_id +
      "&course_id=" + course_id +
      "&module_id=" + module_id)
        .then(function(res){
          // console.log(res.data)
          this.setState({presentations: res.data})
          // console.log("set the state!")
        });
    }

    this.setState({activeModule: newIndex})
  }

  handleItemClick(e, clickedItem) {
    //If we click on the same as the active module, close the accordion folder
    //Else, we want to set it to the new one.
    const index = clickedItem.index
    const activeItem = this.state.activeItem
    const newIndex = (activeItem === index) ? -1 : index

    this.setState({activeItem: newIndex})

    //FIXME: hard coded now but please fix..
    let module_id = 41;
    let user_id = 1;
    let course_id = 21;
    let presentation_id = 41;

    // TODO: update the Presentation BODY whenever you click on a presentation or exercise.
    //TODO: How to differentiate between exercise and presentation??
    axios.get(server + "/slides?user_id=" + user_id +
    "&course_id=" + course_id +
    "&module_id=" + module_id +
    "&presentation_id=" + presentation_id)
      .then(function(res){
        // console.log("EXERCISES:", res.data)
        // console.log("NavBar/courseClicked I GOT THE MODULES:", res.data)
        // this.props.updatemods(res.data)
        // console.log("setMods called.")
      });

    let exercise_id = 81;
    //TODO: Same as above but for exercises?
    axios.get(server + "/exercise/instructions?user_id=" + user_id +
    "&course_id=" + course_id +
    "&module_id=" + module_id +
    "&exercise_id=" + exercise_id)
      .then(function(res){
        // console.log("EXERCISES:", res.data)
        // console.log("NavBar/courseClicked I GOT THE MODULES:", res.data)
        // this.props.updatemods(res.data)
        // console.log("setMods called.")
      });
  }

  componentWillReceiveProps() {
    this.setState({modules: this.props.modules})
  }

  // TODO: get modules based on state.course_id.
  // get exercises and presentations for each module.
  // componentDidMount() {
  // }

  render() {
    // console.log("SideNav State: ", this.state)
    return (
      <Accordion as={Menu} vertical>
        {this.state.modules.map( (module, index) =>
          //FIXME: menu item and accordion title have same key..?
          <Menu.Item key={index + 1000}>
            <Accordion.Title
              index={index}
              key={index}
              active={this.state.activeModule === index}
              content={module.name}
              onClick={this.handleModuleClick}
            />
            <Accordion.Content
              active={this.state.activeModule === index}
              content={
                <Menu vertical fluid>
                  <Menu.Item>
                    <Menu.Header>Presentations</Menu.Header>
                    <Menu.Menu>
                      {this.state.presentations.map( (presentation, index) =>
                        module.module_id === presentation.module_id &&
                          <Menu.Item
                            index={index + 100}
                            key={index + 100}
                            active={this.state.activeItem === index + 100}
                            content={presentation.title}
                            onClick={this.handleItemClick}
                          />
                      )}
                    </Menu.Menu>
                  </Menu.Item>
                  <Menu.Item>
                    <Menu.Header>Exercises</Menu.Header>
                      <Menu.Menu>
                        {this.state.exercises.map( (exercise, index) =>
                          module.module_id === exercise.module_id &&
                            <Menu.Item
                              index={index + 200}
                              key={index + 200}
                              active={this.state.activeItem === index + 200}
                              content={exercise.name}
                              onClick={this.handleItemClick}
                            />
                        )}
                    </Menu.Menu>
                  </Menu.Item>
                </Menu>
              }
            />
          </Menu.Item>
        )}
      </Accordion>
    )
  }
}

export default SideNav;
