# Cricket App - ES6 Features

## Objectives

This project helps to:

- List key features of ES6
- Demonstrate usage of `let`, `const`, and arrow functions
- Understand class fundamentals and inheritance (conceptual)
- Apply ES6 features like:
  - `map()` method
  - Arrow functions
  - Destructuring
  - Spread operator

---

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- NPM
- Visual Studio Code

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cricketapp.git
cd cricketapp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

---

## Components

- **ListofPlayers**
    - Declares an array of 11 players with names and scores.
    - Uses **ES6** `map()` to display all players.
    - Filters players with scores below 70 using **ES6 arrow functions**.

- **IndianPlayers**
    - Displays Odd and Even indexed players using **destructuring logic**.
    - Merges two player arrays (`T20players`, `RanjiTrophyPlayers`) using **ES6 spread operator**.

---

## Toggle View
In `App.js`, toggle between the two components using the `flag` variable:
```jsx
const flag = true; // Displays ListofPlayers
// const flag = false; // Displays IndianPlayers
```