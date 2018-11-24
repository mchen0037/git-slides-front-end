import React, { Component } from 'react';
import { Menu, Accordion } from 'semantic-ui-react';

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeModule: -1,
      activeItem: -1
    }
    this.handleModuleClick = this.handleModuleClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

  render() {
    console.log("SideNav", this.state)
    return (
      <Accordion as={Menu} vertical>
        <Menu.Item>
          <Accordion.Title
            index={0}
            active={this.state.activeModule === 0}
            content="Module 1"
            onClick={this.handleModuleClick}
          />
          <Accordion.Content
            active={this.state.activeModule === 0}
            content= {
              <Menu vertical fluid>
                <Menu.Item>
                  <Menu.Header>Presentations</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item
                      name='Presentation 1'
                      // presentations = 0., exercises = 1.
                      index={0.1}
                      active={this.state.activeItem === 0.1}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Presentation 2'
                      index={0.2}
                      active={this.state.activeItem === 0.2}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Presentation 3'
                      index={0.3}
                      active={this.state.activeItem === 0.3}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Header>Exercises</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item
                      name='Exercise 1'
                      index={1.1}
                      active={this.state.activeItem === 1.1}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Exercise 2'
                      index={1.2}
                      active={this.state.activeItem === 1.2}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            }
          />
        </Menu.Item>
        <Menu.Item>
          <Accordion.Title
            index={1}
            active={this.state.activeModule === 1}
            content="Module 2"
            onClick={this.handleModuleClick}
          />
          <Accordion.Content
            active={this.state.activeModule === 1}
            content= {
              <Menu vertical fluid>
                <Menu.Item>
                  <Menu.Header>Presentations</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item
                      name='Presentation 4'
                      index={0.4}
                      active={this.state.activeItem === 0.4}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Presentation 5'
                      index={0.5}
                      active={this.state.activeItem === 0.5}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                  <Menu.Header>Exercises</Menu.Header>
                  <Menu.Menu>
                    <Menu.Item
                      name='Exercise 3'
                      index={1.3}
                      active={this.state.activeItem === 1.3}
                      onClick={this.handleItemClick}
                    />
                    <Menu.Item
                      name='Exercise 4'
                      index={1.4}
                      active={this.state.activeItem === 1.4}
                      onClick={this.handleItemClick}
                    />
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            }
          />
        </Menu.Item>
      </Accordion>
      // <Accordion as={Menu} vertical>
      //   <Menu.Item>
      //     <Accordion.Title
      //       active={activeModule === 0}
      //       content='Module 1'
      //       index={0}
      //       onClick={this.handleClick}
      //     />
      //     <Accordion.Content active={activeModule === 0} content={
      //       <Accordion>
      //         {/* //TODO: Look more into https://react.semantic-ui.com/modules/accordion/#advanced-nested */}
      //
      //       </Accordion>
      //
      //     } />
      //   </Menu.Item>
      //
      //   <Menu.Item>
      //     <Accordion.Title
      //       active={activeModule === 1}
      //       content='Colors'
      //       index={1}
      //       onClick={this.handleClick}
      //     />
      //     <Accordion.Content active={activeModule === 1} content={ColorForm} />
      //   </Menu.Item>
      // </Accordion>
    )
  }
}

export default Sidebar;
