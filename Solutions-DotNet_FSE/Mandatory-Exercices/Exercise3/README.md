# Currency Convertor - React events

## Objectives

- Explain React events
- Define Synthetic Event and show how it standardizes browser events in React
- Use synthetic events for handling user actions
- Pass arguments to event handlers
- Create and use a React component
- Practice state management and providing feedback with alert messages

---

## Features

- Increment/Decrement counter
- Show “welcome” or “I was clicked” alert on button click
- Convert INR to Euro (1 Euro = 100.60 INR) when Euro is entered as currency and Submit is clicked
- UI and styling match the assignment screenshots

---

## Logic & Implementation

- **App.js**: Handles counter and button actions (all using React synthetic events). Renders the converter.
- **CurrencyConvertor.js**: Controlled form. On submit, if currency is 'Euro', calculates and shows alert; otherwise, shows error.


---

## Setup & Usage

1. **Clone this repo**  
   `git clone https://github.com/your-username/currency-convertor-app.git && cd currency-convertor-app`

2. **Install dependencies**  
   `npm install`

3. **Run the app**  
   `npm start`