# FetchUserApp - REST APIs
##  Objectives

- Learn how to consume REST APIs using React
- Use `fetch()` and `async/await` to retrieve data from an external API
- Update component state using lifecycle methods (`componentDidMount`)
- Render fetched data dynamically in a React component

---

## Features

- Fetches a random user's details (title, first name, last name, picture)
- Displays a loading message until the API data is retrieved

---


## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (comes bundled with Node.js)
- Visual Studio Code or any other preferred code editor

---

## Installation
```bash
# Create the React app
npx create-react-app fetchuserapp

# Move into the project directory
cd fetchuserapp
```

---

## Usage
1. **Create `Getuser.js` in `src/`:**
```jsx
import { Component } from "react";

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      person: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }
  
  render() {
    const { person, loading } = this.state;

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>
          {person.name.title} {person.name.first} {person.name.last}
        </h1>
        <img src={person.picture.large} alt="User" />
      </div>
    );
  }
}

export default Getuser;
```
2. **Update `App.js` to Use the Component:**
```jsx
import Getuser from "./Getuser";

function App() {
  return (
    <div>
      <Getuser />
    </div>
  );
}

export default App;
```
3. **Run the App:**
```bash
npm start
```