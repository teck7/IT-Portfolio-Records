import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList'

class App extends Component {

  // Initial State
  state = {

    // Set projects to null instead of empty array
    // Empty array would not complement the trenary operator
    // in the return
    projects: null
  }

  render() {

    // This ES6 synthax allow multiple keys
    // (i.e { projects, user, etc.. })
    const { projects } = this.state

    return (
      <div className="App">
          {
            // ![] = false
            // !![] = true  (loaded)
            // !null = true
            // !!null = false (still waiting to load)
            !!projects ? (
              <ProjectList items={ projects } />
            ) : (
              'Loading projects....'
            )
          }
      </div>
    );
  }

  // Run after our component instance first appears on screen
  componentDidMount() {
    // Use built in method FETCH to fetch the api server host
    fetch('http://localhost:3000/projects')
      // Return a PROMISE and spits back a response
      // Which then read the Json data out from that response
      // Parse Json into Js objects
      .then(res => res.json())
      // Once have our Json that is in an array format by default
      // Then run callback function
      .then(json => {
        // Set the projects in a state and rendered into Json format
        // (i.e update component' state with loaded projects)
        this.setState({
          projects: json
        })
      })
  }
}

export default App;
