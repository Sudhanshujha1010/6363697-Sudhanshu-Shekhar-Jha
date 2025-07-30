# Office Space Rental App - JSX Demonstration
## Objectives

- Define and render elements using JSX
- Use JavaScript expressions inside JSX
- Apply **conditional styling** with `className`
- Display images using JSX attributes
- Load data from a JavaScript object
- Use conditional logic (`if/else`) inside JSX rendering

---

## Prerequisites

To run this lab, make sure you have:

- Node.js
- NPM
- Visual Studio Code

---

## Getting Started

### 1. Create the App

```bash
npx create-react-app officespacerentalapp
cd officespacerentalapp
```

### 2. Add Required Files
Place your **office image** in the `public/` folder: `public/office.jpeg`
> You can use any image and name it `office.jpeg` or update the filename in `App.js`.

### 3. Run the App
```bash
npm start
```

---

## App Structure

**`src/App.js`**
- Displays a heading (`element`)
- Shows an image (`jsxatt`)
- Renders an object (`ItemName`) containing office name, rent, and address
- Applies conditional class (`textRed` or `textGreen`) based on `Rent`

**src/App.css**
```css
.textRed {
  color: red;
  font-weight: bold;
}

.textGreen {
  color: green;
  font-weight: bold;
}
```