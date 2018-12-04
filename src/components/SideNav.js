import React, { Component } from 'react';
import { Menu, Accordion } from 'semantic-ui-react';
import axios from 'axios';

// let server = "http://172.20.10.2:4000"
let server = "http://0.0.0.0:4000"

class SideNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeModule: -1,
      activeItem: -1,
      course_id: this.props.course_id,
      modules: this.props.modules,
      presentations: [],
      exercises: []
    }
    this.handleModuleClick = this.handleModuleClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  async getExercises(user_id, course_id, module_id){
    let json = await axios.get(server + "/exercise?user_id=" + user_id +
      "&course_id=" + course_id +
      "&module_id=" + module_id);

    return json;
  }

  async getPresentations(user_id, course_id, module_id) {
    let json = await axios.get(server + "/presentation?user_id=" + user_id +
      "&course_id=" + course_id +
      "&module_id=" + module_id);

    return json;
  }

  async handleModuleClick(e, clickedModule) {
    //If we click on the same as the active module, close the accordion folder
    //Else, we want to set it to the new one.
    console.log(clickedModule, this.state.activeModule)
    const index = clickedModule.index
    const activeModule = this.state.activeModule
    const newIndex = (activeModule === index) ? -1 : index

    if (newIndex !== -1) {

      let module_id = clickedModule.index;
      let course_id = this.props.course_id;
      let user_id = this.props.user.id;

      let exerciseRequest = this.getExercises(user_id, course_id, module_id);
      exerciseRequest.then(res => {
        this.setExercises(res.data);
      });

      let presentationRequest = this.getPresentations(user_id, course_id, module_id);
      presentationRequest.then(res => {
        this.setPresentations(res.data);
      });
    }
    this.setState({activeModule: newIndex});
  }

  setExercises(exercises) {
    this.setState({
      exercises: exercises
    });
  }

  setPresentations(presentations) {
    this.setState({
      presentations: presentations
    });
  }

  async getSlides(user_id, course_id, module_id, presentation_id) {
    let json = await axios.get(server + "/slides?user_id=" + user_id +
      "&course_id=" + course_id +
      "&module_id=" + module_id +
      "&presentation_id=" + presentation_id);
    return json;
  }

  async getInstructions(user_id, course_id, module_id, exercise_id) {
    let json = await axios.get(server + "/exercise/instructions?user_id=" + user_id +
      "&course_id=" + course_id +
      "&module_id=" + module_id +
      "&exercise_id=" + exercise_id);
    return json;
  }

  async handleItemClick(e, clickedItem) {
    const isPresentation = (e.target.attributes.ispresentation.nodeValue === "1")
     ? true : false;

    const index = clickedItem.index
    const activeItem = this.state.activeItem
    const newIndex = (activeItem === index) ? -1 : index

    console.log("handleItemClick clickedItem", clickedItem)

    //FIXME: hard coded now but please fix..
    let module_id = this.state.activeModule;
    let user_id = this.props.user.id;
    let course_id = this.props.course_id;

    if (isPresentation) {
      let presentation_id = clickedItem.index;
      let slideRequest = this.getSlides(user_id, course_id, module_id, presentation_id);
      slideRequest.then( res => {
        console.log("Presentation Slide:", res.data)
        this.props.setSlide(res.data);
      })
    }
    else {
      let exercise_id = clickedItem.index;
      let instructionsRequest = this.getInstructions(user_id, course_id, module_id, exercise_id);
      instructionsRequest.then( res => {
        console.log("Exercise insructions:", res.data)
        this.props.setExercise(res.data);
      })

    }
    this.setState({activeItem: newIndex})
  }


  render() {
    // console.log("SideNav State: ", this.state)
    // console.log("SideNav props", this.props)
    return (
      <Accordion as={Menu} vertical>
        {this.props.modules.map( (module) =>
          //FIXME: menu item and accordion title have same key..?
          <Menu.Item key={module.module_id}>
            <Accordion.Title
              index={module.module_id}
              key={module.module_id}
              active={this.state.activeModule === module.module_id}
              content={module.name}
              onClick={this.handleModuleClick}
            />
            <Accordion.Content
              active={this.state.activeModule === module.module_id}
              content={
                <Menu vertical fluid>
                  <Menu.Item>
                    <Menu.Header>Presentations</Menu.Header>
                    <Menu.Menu>
                      {this.state.presentations.map( (presentation) =>
                          <Menu.Item
                            index={presentation.presentation_id}
                            key={presentation.presentation_id}
                            active={this.state.activeItem === presentation.presentation_id}
                            content={presentation.presentation_file}
                            onClick={this.handleItemClick}
                            ispresentation={1}
                          />
                      )}
                    </Menu.Menu>
                  </Menu.Item>
                  <Menu.Item>
                    <Menu.Header>Exercises</Menu.Header>
                      <Menu.Menu>
                        {this.state.exercises.map( (exercise) =>
                            <Menu.Item
                              index={exercise.exercise_id}
                              key={exercise.exercise_id}
                              active={this.state.activeItem === exercise.exercise_id}
                              content={exercise.exercise_title}
                              onClick={this.handleItemClick}
                              ispresentation={0}
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
