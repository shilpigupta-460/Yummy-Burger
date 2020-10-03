import React, { Component } from "react";

import "./App.css";
import Layout from "./components/layou/Layout";
import ToolBar from "./components/ToolBar/ToolBar";
import SideBar from "./components/SideBar/SideBar";
class App extends Component {
  state = {
    sidebarOpen: false,
  };
  onSetSidebarOpen = () => {
    this.setState({ sidebarOpen: true });
  };

  render() {
    return (
      <div>
        <SideBar
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "red" } }}
        >
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </SideBar>
        <ToolBar />
        <Layout>
          <p>APP </p>
        </Layout>
      </div>
    );
  }
}

export default App;
