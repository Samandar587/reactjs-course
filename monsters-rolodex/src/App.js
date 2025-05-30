import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      mosnsters: [],
    };
    console.log("1");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { mosnsters: users };
          },
          () => {
            console.log(users);
          }
        )
      )
    );
    console.log("3");
  }

  render() {
    console.log("2");
    return (
      <div className="App">
        {this.state.mosnsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
