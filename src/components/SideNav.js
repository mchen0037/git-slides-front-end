import React, { Component } from 'react';
import { Menu, Accordion } from 'semantic-ui-react';

var fake_oop_presentations = {
  presentations: [
    {
      module_id: 1,
      presentation_id: 1,
      title: "Presentation Title 1",
      slides: [
        {content: "some content"},
        {content: "some content2"},
        {content: "some content3"}
      ]
    },
    {
      module_id: 1,
      presentation_id: 2,
      title: "Presentation Title 2",
      slides: [
        {content: "some content4"},
        {content: "some content5"},
        {content: "some content6"}
      ]
    },
    {
      module_id: 1,
      presentation_id: 3,
      title: "Presentation Title 3",
      slides: [
        {content: "some content7"},
        {content: "some content8"},
        {content: "some content9"}
      ]
    },
    {
      module_id: 2,
      presentation_id: 4,
      title: "Presentation Title 4",
      slides: [
        {content: "some content10"},
        {content: "some content11"}
      ]
    },
    {
      module_id: 2,
      presentation_id: 5,
      title: "Presentation Title 5",
      slides: [
        {content: "some content12"},
        {content: "some content13"},
        {content: "some content14"}
      ]
    }
  ]
};

var fake_oop_exercises = {
  exercises: [
    {
      module_id: 1,
      name: "Exercise 1",
      exercise_id: 1,
      instructions: "instructions 1"
    },
    {
      module_id: 1,
      name: "Exercise 2",
      exercise_id: 2,
      instructions: "instructions 2"
    },
    {
      module_id: 2,
      name: "Exercise 3",
      exercise_id: 3,
      instructions: "instructions 3"
    },
    {
      module_id: 2,
      name: "Exercise 4",
      exercise_id: 4,
      instructions: "instructions 4"
    }
  ]
}

// var fake_oop_modules = {
//   modules: [
//     {
//       name: "Module 1",
//       module_id: 1
//     },
//     {
//       name: "Module 2",
//       module_id: 2
//     }
//   ]
// };

// var fake_oop_course = {
//   course_id: 1,
//   course: "CSE 165"
// }

class SideNav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeModule: -1,
      activeItem: -1,
      course_id: this.props.course_id,
      course: {},
      modules: [],
      exercises: [],
      presentations: []
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

    this.setState({activeModule: newIndex})
  }

  handleItemClick(e, clickedItem) {
    //If we click on the same as the active module, close the accordion folder
    //Else, we want to set it to the new one.
    const index = clickedItem.index
    const activeItem = this.state.activeItem
    const newIndex = (activeItem === index) ? -1 : index

    this.setState({activeItem: newIndex})
  }

  // TODO: get modules based on state.course_id.
  // get exercises and presentations for each module.
  componentDidMount() {
    console.log("FIXME: ", this.props)
    this.setState({
      // TODO:grab stuff from DB.
      course: this.props.user.courses[0],
      modules: this.props.user.modules,
      presentations: fake_oop_presentations.presentations,
      exercises: fake_oop_exercises.exercises
    })
  }

  render() {
    console.log("FIXME: ", this.props)
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
