import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      usersText: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    // fetch(
    //   `https://cors-anywhere.herokuapp.com/https://api.github.com/users/JarenSmart`
    // );
    //   .then((response) => response.json())
    //   .then((person) => {
    //     console.log("Person: ", person);
    //     this.setState({ users: person.message });
    //   })
    //   .catch((error) => {
    //     console.log("error: ", error);
    //   });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");

    //update the state
    if (prevState.users !== this.state.doggos) {
      console.log("Your users have loaded!");
    }
  }

  changeHandler = (e) => {
    this.setState({ usersText: e.target.value });
    console.log("this.state.usersText: ", this.state.usersText);
  };

  fetchUsers = (e) => {
    e.preventDefault();

    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.github.com/users/JarenSmart`
    )
      .then((response) => console.log(response))
      .then((person) => {
        console.log("Person: ", person);
        this.setState({ users: person.message });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };

  render() {
    return (
      <div>
        <h1>Github User Card</h1>
        <input
          type="text"
          value={this.state.usersText}
          onChange={this.changeHandler}
        />
        <button onClick={this.fetchUsers}>Get new users!</button>
        <div className="users">
          {this.state.users.map((user) => (
            <img width="200" src={user} alt={user} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
