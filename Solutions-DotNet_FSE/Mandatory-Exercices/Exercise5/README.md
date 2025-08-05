# BloggerApp – Conditional Rendering in React

## Objectives

- Implement multiple ways of conditional rendering in React

- Extract and render multiple components

- Use the `.map()` function to display lists

- Apply and explain keys in React lists

- Extract and display components with keys

- Centralize layout using flexbox

---

## Components

The application has **three main components**:

- BookDetails

- BlogDetails

- CourseDetails

Each component receives or imports static data from a centralized data folder and displays it using `.map()`.

---

## Conditional Rendering Techniques Used

| Technique              | Component   | Example                                |
| ---------------------- | ----------- | -------------------------------------- |
| `map()` with `key`     | All         | Displaying lists with unique IDs       |
| JSX variable rendering | BookDetails | `const bookdet = (...)`                |
| JSX fragments          | BlogDetails | `{blogs.map(blog => (...))}`           |

---

## Setup and Usage

### Prerequisites

To run this project locally, make sure you have:

- Node.js

- npm

- Visual Studio Code (or any editor)

### Installation & Run

1. Clone or download the repository to your local machine.

2. Start the development server:

```bash
npm start
```
