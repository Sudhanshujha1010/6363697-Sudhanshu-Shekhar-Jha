# Conditional Rendering - Login/Logout Example

## Objectives

- Understand and implement **React conditional rendering** using state.
- Learn how to create **modular React components** and organize them in folders.
- Use **synthetic events** like `onClick` to trigger state changes.

---

## Code Logic Explained

### `App.js`

- Maintains `isLoggedIn` boolean state that tracks authentication status.
- Implements event handlers `handleLoginClick` and `handleLogoutClick` to update `isLoggedIn`.
- Conditionally renders the greeting message via `<Greeting isLoggedIn={isLoggedIn} />`.
- Conditionally renders either `<LoginButton />` or `<LogoutButton />`.
- Imports its components from the `/components` folder.

### `Greeting` and its subcomponents

- `Greeting` chooses between:
  - `<UserGreeting />` — displays "Welcome back!"
  - `<GuestGreeting />` — displays "Please sign up."

### `LoginButton` & `LogoutButton`

- Simple buttons that accept an `onClick` prop callback.
- Render "Login" or "Logout" text respectively.

---

## Setup & Usage

### Prerequisites

- Node.js
- npm

### Installation & Run

1. Clone or download the repository to your local machine.
2. Start the development server:
```bash
npm start
```

### Using the App

- Initially, you see "Please sign up." with a **Login** button.
- Click **Login** to switch to "Welcome back!" and display the **Logout** button.
- Click **Logout** to revert to the guest view.
- The text and buttons update dynamically based on the login state.

---