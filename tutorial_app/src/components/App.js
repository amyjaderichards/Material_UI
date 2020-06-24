import React from "react";

import { Header, Footer } from "./layouts";

import Exercises from "./exercises"


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Exercises />

        <Footer />
      </div>
    );
  }
}

export default App;
