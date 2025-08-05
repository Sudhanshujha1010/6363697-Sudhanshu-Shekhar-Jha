# Mail Register App - React Forms validation

## Overview

This project showcases how to implement **React Forms validation** effectively by:

- Using controlled components for managing input values via React state
- Implementing validation logic during input changes and form submission events
- Highlighting the difference between React forms and traditional HTML forms
- Demonstrating various input controls such as textboxes, password fields, and buttons
- Handling form submission with validation rules

---

## Features

- React form with real-time validation and submit-time validation
- Input fields:
  - Name (minimum 5 characters)
  - Email (must contain '@' and '.')
  - Password (minimum 8 characters)
- Validation feedback provided via JS alerts (can be extended to inline messages)
- Prevents invalid form submission
- Controlled components keep form inputs in sync with React state

---

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (comes bundled with Node.js)
- Visual Studio Code or any other preferred code editor

---

## Getting Started

1. **Create a new React app** (if not already done):

```bash
npx create-react-app mailregisterapp
cd mailregisterapp
```


2. **Add the `register.js` component**

Create a file `src/register.js` and add the React form component code.

3. **Modify `App.js`**

Replace the existing `src/App.js` code to use the `Register` component.


4. **Run the project**

```bash
npm start
```