import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./Components/Project/UpdateProject";
import ProjectBoard from "./Components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./Components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./Components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import AddProject from "./Components/Project/AddProject";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addProject" component={AddProject} />
            <Route exact path="/updateProject/:id" component={UpdateProject} />
            <Route exact path="/projectBoard/:id" component={ProjectBoard} />
            <Route
              exact
              path="/addProjectTask/:id"
              component={AddProjectTask}
            />
            <Route
              exact
              path="/updateProjectTask/:backlog_id/:pt_id"
              component={UpdateProjectTask}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;