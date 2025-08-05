# Employee Management App - React Context API

## Objectives

- Explain the need and benefits of React Context API

- Work with `createContext()` and `useContext()`

- Replace prop drilling with context for cleaner code

---

## Prerequisites

- Node.js

- NPM

- Visual Studio Code

---

## Components

- `ThemeContext.js`
    Defines a global context using createContext('light') with ThemeContext.Provider wrapping the app.

- `App.js`
  - Maintains state for theme

  - Wraps components inside `<ThemeContext.Provider>`
  
  - Allows user to select between Light and Dark themes

- `EmployeesList.js`
  - Maps employee data to multiple `EmployeeCard` components

  - No longer needs to pass theme props

- `EmployeeCard.js`
  - Uses `useContext(ThemeContext)` to apply theme styling to buttons

  - Renders name, email, and phone number

### Theming

- Button themes are styled based on class names (`light` or `dark`)

- Controlled globally using Context API

---

## Installation & Run

1. Clone or download the repository to your local machine.

2. Start the development server:

```bash
npm start
```
