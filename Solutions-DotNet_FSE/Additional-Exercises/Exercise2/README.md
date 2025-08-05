# Ticket Raising App - React forms

## Overview

This app demonstrates how to create and handle React forms using controlled components. It includes various input controls like textboxes and textareas, and handles form submission with an alert display showing a unique reference number.

---

## Features

- React form handling with controlled components
- Input controls: text input and textarea
- Form submission with validation
- Generates a random reference/transaction number on submitting complaints
- Alerts the user with a confirmation message including the reference number

---

## Prerequisites

- Node.js
- npm (comes with Node.js)
- Visual Studio Code (or any preferred code editor)

---

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the repository** (or create a new React app):

```bash
npx create-react-app ticketraisingapp
cd ticketraisingapp
```

2. **Add the `ComplaintRegister` component**

Create a file `src/ComplaintRegister.js` and add the component code.

3. **Modify `src/App.js`**

Replace the default code in `App.js` to render the `ComplaintRegister` component.

4. **Start the development server**

```bash
npm start
```

---

## Component Breakdown

### `ComplaintRegister`

- Manages form state using React's `this.state`
- Uses controlled components (`input` and `textarea`) synced via `onChange`
- Handles form submission:
  - Prevents page reload 
  - Generates a random reference number
  - Alerts user with a confirmation message including the employee name and reference ID
  