# React Complete Notes for Students

> A beginner-friendly, complete guide to React — explained like you're learning it for the first time. Every topic includes simple explanations, real-world analogies, and working code examples.

---

## 📋 Table of Contents

| # | Topic | What you'll learn |
|---|-------|-------------------|
| 1 | [What is React?](#1-what-is-react) | Introduction, history, overall idea |
| 2 | [React.js vs React Native](#2-reactjs-vs-react-native) | Web vs Mobile difference |
| 3 | [Major Uses of React](#3-major-uses-of-react) | SPA & PWA |
| 4 | [Competitors and Advantages](#4-competitors-and-advantages-of-react) | Angular, Vue comparison |
| 5 | [Setting Up Your First React App](#5-setting-up-your-first-react-app) | Step-by-step setup |
| 6 | [Understanding NPM](#6-understanding-npm) | Package manager basics |
| 7 | [React Files & Folders](#7-react-files--folders) | What each file does |
| 8 | [JSX - HTML Inside JavaScript](#8-jsx---html-inside-javascript) | The syntax React uses |
| 9 | [The 4 Core Topics of React](#9-the-4-core-topics-of-react) | Components, Props, State, APIs |
| 10 | [Components](#10-components) | Building blocks of UI |
| 11 | [Props](#11-props) | Passing data down |
| 12 | [State & useState](#12-state-and-usestate) | Data that changes |
| 13 | [Virtual DOM](#13-virtual-dom) | How React stays fast |
| 14 | [Working with APIs](#14-working-with-apis) | Fetch, Axios, REST |
| 15 | [useEffect Hook](#15-useeffect-hook) | Side effects & lifecycle |
| 16 | [Hooks in React (All 5)](#16-hooks-in-react) | useState, useEffect, useMemo, useCallback, useRef |
| 17 | [React Compiler (React 19+)](#17-react-compiler-react-19) | Automatic optimization |
| 18 | [Events in React](#18-events-in-react) | User actions & handlers |
| 19 | [Forms in React](#19-forms-in-react) | Controlled vs Uncontrolled |
| 20 | [React Routing](#20-react-routing) | Multi-page navigation |
| 21 | [Advanced React Routing](#21-advanced-react-routing) | 404, navigate, params, nested |
| 22 | [Context API](#22-context-api) | Global data sharing |
| 23 | [React Redux](#23-react-redux) | Advanced state management |
| 24 | [Quick Recap](#24-quick-recap) | One-line summaries |

---

# 1. What is React?

## Plain-English Definition

React is an **open-source JavaScript library** used to build **user interfaces (UI)** — the part of an app that people see and interact with.

> 💡 **Think of it this way:** If a website is a house, React is the tool that helps you build all the rooms (UI) efficiently and reuse them.

## A Little History

| Year | What Happened |
|------|---------------|
| **2012** | Facebook (Meta) was growing fast with millions of users. They needed a better way to build and manage the UI. |
| **2012** | Facebook built its own library called **React** to improve user experience. |
| **2014** | Facebook made React **open source** — meaning anyone in the world could use it for free. |

## Key Takeaways

- React is a **library** (not a full framework).
- It focuses only on the **UI layer**.
- It is **maintained by Meta (Facebook)**.

---

# 2. React.js vs React Native

People often confuse these two. The difference is simple:

| React.js | React Native |
|----------|--------------|
| Used for **web applications** / websites | Used for **mobile applications** |
| Runs in the browser | Runs on Android / iOS |
| Components become HTML tags (`<div>`, `<h1>`) | Components become native mobile views (`<View>`, `<Text>`) |

> 💡 **Both use the same React concepts** (components, props, state, hooks). Only the output target changes: browser vs mobile.

---

# 3. Major Uses of React

React is mainly used to build the UI of:

### SPA (Single Page Application)
An application that loads a specific part of the UI **without reloading the whole page**.

**Example:** When you are on Instagram and like a post, only the like count changes — the whole page does not reload.

### PWA (Progressive Web Application)
A web app that **feels like a native mobile app** — it can work offline, show notifications, and be installed on the phone.

**Examples:** Twitter Lite, Telegram Web.

---

# 4. Competitors and Advantages of React

React is not alone. There are other tools for building UI:

| Tool | Type | Notes |
|------|------|-------|
| **Angular** | JavaScript **framework** (heavy, complete solution) | Bigger learning curve, battery-included |
| **Vue** | JavaScript **library** (like React) | Simpler, but smaller ecosystem |
| **React** | JavaScript **library** | Focused on UI, huge ecosystem |

## Advantages of React over its competitors

- ✅ **Simpler and easier to learn** — you just need HTML, CSS and JavaScript basics.
- ✅ **Virtual DOM** — makes UI updates very fast (more on this later).
- ✅ **Huge community** — easy to find help and ready-made solutions.

---

# 5. Setting Up Your First React App

## What You Need

1. **VS Code** — a code editor (text editor made for programmers).
2. **NPM** — Node Package Manager (comes with Node.js). This helps you download libraries.
3. **A Bundler** — a tool that gives you a ready-made React template/boilerplate so you don't create every file manually.

## Why use a bundler?

Without a bundler, you'd have to write all the configuration yourself. Tools like **Vite** give you a working React project with just one command.

## Steps at a Glance

```
Install VS Code  →  Install Node.js (NPM)  →  Create project with Vite  →  Run it
```

## Commands (Vite)

```bash
# Create a new React app (Vite will ask for project name & template)
npm create vite@latest

# After creating the project, go inside the folder
cd your-project-name

# Install the dependencies
npm install

# Run the application in development mode
npm run dev

# Build for production (creates a 'dist' folder ready to deploy)
npm run build
```

> 💡 **What does `npm run dev` do?** It starts a local server and opens your app in the browser at `http://localhost:5173`. Any change you save is shown instantly.

---

# 6. Understanding NPM

**NPM** stands for **Node Package Manager**.

- It is a **software tool** (comes installed with Node.js).
- Developers use it to **download, install, update, or delete** frameworks and libraries in a project.
- Think of NPM as an **app store for code** — you type `npm install <package>` and it downloads that library into your project.

### Common NPM Commands

```bash
npm install axios        # install a library (axios)
npm uninstall axios      # remove a library
npm update               # update all libraries
npm init                 # create a new package.json file
```

---

# 7. React Files & Folders

When you create a React project with Vite, you get this structure. Here's what each file does:

| File / Folder | Purpose |
|---------------|---------|
| `package.json` | Contains **metadata** about your app (name, version, dependencies, scripts). |
| `package-lock.json` | Locks the **exact versions** of all dependencies (so `npm install` gives the same versions to everyone). |
| `vite.config.js` | Contains **settings for Vite** (like dev server port, plugins). |
| `.gitignore` | Lists files/folders **ignored by Git** (like `node_modules`). |
| `eslint.config.js` | **ESLint** — notifies and observes errors in your code (like a spell-checker for code). |
| `node_modules` | Contains the **actual code** of all installed packages (this is huge — never edit it). |
| `public` | For **static resources** — files served as-is (images, favicon). |
| `src` | For **dynamic resources** — your actual React source code. |
| `index.html` | **Main entry point** of the app; contains the `<head>` and `<body>`. |
| `src/main.jsx` | **Renders** `App.jsx` into the `div` with id `root`. In React, loading is called **rendering**. |
| `src/App.jsx` | Contains the **actual body code** in JSX format — the main component. |

> 💡 **Terminology:** In React, "loading" a component onto the screen is called **rendering**.

---

# 8. JSX - HTML Inside JavaScript

## What is JSX?

**JSX** = **JavaScript XML** (JavaScript eXtension).

- JSX lets us write **HTML inside JavaScript**.
- Example: You can write `<h1>Hello</h1>` directly in your JavaScript code.
- Babel (a tool) converts this HTML-like syntax into normal JavaScript behind the scenes.

## Rules of JSX (Very Important for Exams & Interviews)

1. **Every JSX file should return one HTML element.** If you have multiple elements, wrap them in a parent `<div>` or use fragments (`<>...</>`).

   ```jsx
   // ❌ Wrong - multiple elements without a parent
   return (
     <h1>Title</h1>
     <p>text</p>
   );

   // ✅ Correct - wrapped in one parent div
   return (
     <div>
       <h1>Title</h1>
       <p>text</p>
     </div>
   );
   ```

2. **The file name and the component/function name should be the same** (best practice). Component names should start with an **uppercase** letter.

   ```jsx
   // File: Student.jsx
   function Student() {
     return <h1>Hi</h1>;
   }
   ```

3. **In JSX, `class` becomes `className`** — because `class` is a reserved keyword in JavaScript.

   ```jsx
   <div className="container">Hello</div>   // ✅ not class="container"
   ```

4. **It is mandatory to close all tags**, including self-closing tags.

   ```jsx
   <input type="text" />   // ✅ must close with />
   <img src="pic.png" />   // ✅ must close with />
   ```

## Why Use JSX?

- Easier to read (looks like HTML).
- Shows the structure of the UI clearly.
- Prevents mistakes because it looks familiar.

---

# 9. The 4 Core Topics of React

Remove everything else, and React basically deals with these 4 main topics:

1. **Components** — the building blocks of UI.
2. **Props** — how data flows.
3. **State & Virtual DOM** — how UI updates based on data.
4. **APIs** — communicating with servers.

We'll learn each one below in detail. 🚀

---

# 10. Components

## What is a Component?

A component is a **reusable and independent** part of the user interface.

- React divides a large UI into **smaller, logical, reusable parts** called components.
- Each component is like a **blueprint** — you can create many instances of it.

## Analogy 🏠

Think of a website like a house built from **LEGO bricks**. Each brick (component) is separate, reusable, and you can combine them in different ways.

## Example: A Shopping Website

A shopping website can be broken into these components:

```
Navbar
 ├── CartIcon
ProductList
 ├── ProductCard
 ├── ProductCard
 ├── ProductCard
Cart
Footer
```

Components: `Navbar`, `ProductCard`, `ProductList`, `Cart`, `Footer`.

## Advantages of Components

- ♻️ **Reusable** — write once, use many times.
- 🛠️ **Easy to maintain** — fix one component, the rest stay untouched.
- 📖 **Easy to understand** — each component has one job.
- 🗂️ **Organized** — code is clean and structured.
- 🧩 **Composable** — many components combine to make a full app.

## Types of Components

React components can mainly be written in **two ways**:

1. **Function Components** — used in modern React development (recommended).
2. **Class Components** — older style, still found in legacy code.

### Example: Function Component

```jsx
// Function component - a simple JavaScript function that returns JSX
function Student() {
  return <h1>Student Component</h1>;
}

export default Student;
```

> 💡 A function component is literally just a function that **returns JSX**.

---

# 11. Props

## What are Props?

**Props** is short for **Properties**.

- Props are used to **pass data** from a **parent component** to a **child component**.
- A component receives props as an **object** containing **key-value pairs**.

## Analogy 📦

Imagine a package delivered to your house. The **packaging label** (props) carries information about what's inside — the name, the address, etc. The house (component) receives it and uses the info.

## Example

```jsx
function Student(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return <Student name="Ajaya" />;
}
```

Here:
- `name="Ajaya"` is passed from the `App` component (parent) to the `Student` component (child).
- Inside `Student`, `props.name` gives us `"Ajaya"`.

### Destructuring Props (Modern Style)

```jsx
function Student({ name }) {
  return <h1>{name}</h1>;
}
```

Same result, cleaner code.

## Important Points About Props

- ✅ Props are used to **pass data** between components.
- ✅ Props are generally passed from **parent to child** (one-way flow).
- ✅ Props are **read-only** inside the receiving component — you cannot modify them.
- ✅ Props help make components **reusable** (same component, different data).

---

# 12. State and useState

## What is State?

**State** is data that **belongs to a component** and can **change over time**.

- When state changes, React **re-renders** the component so the UI displays the updated data.

## Analogy 🔢

A counter can have:

```
Before clicking the button:
count = 0

After clicking the button:
count = 1
```

The UI updates according to the new state.

## Important Characteristics of State

| Characteristic | Explanation |
|----------------|-------------|
| Changes over time | State is not constant — example: likes count goes up |
| Local to component | Each component owns its own state |
| Causes re-render | Changing state re-renders the component with new data |
| Creates dynamic UI | State is what makes UI interactive |

## What is a Hook?

A **Hook** is a special React function that allows function components to use React features such as:

- **State** (`useState`)
- **Effects** (`useEffect`)
- **Context** (`useContext`)
- **References** (`useRef`)

## The `useState()` Hook — Syntax

The `useState` hook gives us:
- The **current state value**
- A **function** used to update that state

It returns these values in the form of an **array** (that's why we use array destructuring):

```jsx
const [value, setValue] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);
```

| Part | Meaning |
|------|---------|
| `count` | Current state value (starts at `0`) |
| `setCount` | Function used to update the state |
| `0` | Initial value |

## ⚠️ Important: State is Asynchronous

State in React is **asynchronous** — setting it takes a tiny bit of time. So the **line after** `setX()` will run first.

```jsx
let x = 0;
setX(x + 1);   // React schedules the update (takes time)
console.log(x); // Prints 0, not 1! (the update hasn't happened yet)
```

> 💡 **Key takeaway:** Never rely on reading the state value immediately after calling its setter.

## Complete Example: Counter

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

When the button is clicked:

```
0 → 1 → 2 → 3 → 4 ...
```

The state changes and React updates the UI automatically. 🎉

---

# 13. Virtual DOM

## The Problem: Real DOM is Slow

When something changes in a webpage, the browser updates the **DOM** (Document Object Model — the tree of HTML elements). Updating the real DOM is **slow**, especially for big pages.

## The Solution: Virtual DOM

The **Virtual DOM** is a **lightweight in-memory copy** of the UI that React uses to determine what needs to change.

## How It Works (Step by Step)

When state or props change:

1. React creates an **updated virtual representation** of the UI (cheap and fast).
2. React **compares** it with the previous virtual representation (this is called **diffing**).
3. React determines what **actually needs to change** — only the differences.
4. React updates only those **required parts** of the real DOM.

## Visual Example

```
UI change happens (e.g., count increases)
          │
          ▼
   ┌─────────────┐       compare       ┌─────────────┐
   │  Old VDOM   │  ───────────────▶   │  New VDOM   │
   └─────────────┘                     └─────────────┘
          │
          │ find difference (diffing)
          ▼
   Update ONLY the changed part in real DOM
   (NOT the whole page)
```

## Why This Matters

- ✅ **Fast** — only small updates happen instead of re-rendering everything.
- ✅ **Efficient** — saves memory and processing.
- ✅ **Smooth UX** — no flickering or full page reloads.

> 💡 **Remember:** "React updates only the required parts, not the whole page." — a classic exam answer.

---

# 14. Working with APIs

## What is an API?

**API** = **Application Programming Interface**.

- An API acts as a **bridge between the client and the server**.
- It allows the client to send requests to the server and receive responses.

## How Does an API Work?

```
CLIENT (browser/React app)  ──request──▶  SERVER
        ▲                                      │
        │              response                │
        └──────────────────────────────────────┘
```

1. The **client** (browser or React app) sends a request.
2. The **server** processes the request.
3. The **server** sends the response back through the API.
4. The client displays the received data.

## REST API

- The most commonly used APIs in web development are **REST APIs**.
- REST APIs usually send and receive data in **JSON** (JavaScript Object Notation) format.

### Example of JSON

```json
[
  {
    "id": 1,
    "name": "Ajaya",
    "course": "MCA"
  }
]
```

## How to Call an API?

There are two common ways to request data from an API:

## 1. Fetch API

- **Fetch** is the **built-in browser method** used to make HTTP requests.
- It does **not require any installation** (it's built into the browser).

```js
fetch(url, options);
```

```js
fetch("https://api.example.com/users");
```

## 2. Axios

- **Axios** is a **third-party JavaScript library** used to make HTTP requests.
- It provides **additional features** compared to Fetch (automatic JSON handling, interceptors, better error handling).
- Axios must be **installed before use**.

```bash
npm install axios
```

```js
import axios from "axios";
```

```js
axios.get(url);
// or
axios.post(url, data);
```

## Fetch vs Axios

| Feature | Fetch | Axios |
|---------|-------|-------|
| Nature | Built into the browser | Third-party library |
| Installation | No installation required | Requires installation |
| Response | Returns a `Response` object (need `.json()` to parse) | Returns data directly in response |
| Amount of code | Slightly more code | Cleaner and simpler syntax |
| Error handling | Manual (must check `response.ok`) | Automatic (via catch) |

## Fetch and Axios are Asynchronous 🕐

- Both **Fetch** and **Axios** are asynchronous.
- They return a **Promise** — an object that represents "work being done in the background".
- A Promise can be handled using:
  - `.then()` and `.catch()` chains
  - `async` and `await`

### Using Fetch with `.then()` and `.catch()`

```js
fetch(url)
  .then((response) => response.json())   // converts response to JSON
  .then((data) => {
    console.log(data);                    // use the data here
  })
  .catch((error) => {
    console.log(error);                   // handle any error here
  });
```

**Explanation:**
- `fetch(url)` sends the request.
- `response.json()` converts the response into JavaScript objects.
- `.then()` receives the data.
- `.catch()` handles errors.

### Using Fetch with async/await

```js
async function getData() {
  const response = await fetch(url);   // waits for the response
  const data = await response.json();  // waits for the JSON conversion
  console.log(data);                   // display the data
}
```

**Explanation:**
- `async` allows us to use `await` inside the function.
- `await` **waits** until the Promise is completed.
- The response is converted into JSON.
- Finally, the data is displayed.

---

# 15. useEffect Hook

## What is a Side Effect?

A **side effect** is any action that happens outside React's normal rendering. Examples:

- Fetching data from an API
- Using `setTimeout()`
- Using `setInterval()`
- Updating the document title
- Working with browser events

## What is useEffect?

**`useEffect`** is a React Hook used to perform **side effects** in a React component.

## Syntax

```jsx
useEffect(() => {
  // side-effect code here
}, [dependencyArray]);
```

## Why Use useEffect for API Calls?

- API requests are **asynchronous**.
- We usually want to fetch data **after the component is rendered**.
- `useEffect()` is the **recommended place** to perform API calls in React.

```jsx
useEffect(() => {
  fetchData();
}, []);
```

Here, `fetchData()` will be called **once when the component loads**.

## 📊 Dependency Array in useEffect

The behavior of `useEffect()` depends on the **dependency array** (the second argument).

### Case 1: No Dependency Array

```jsx
useEffect(() => {
  console.log("Running");
});
```

**Behavior:**
- Runs **after every render**.
- Runs on the initial render.
- Runs again whenever the component re-renders.

### Case 2: Empty Dependency Array

```jsx
useEffect(() => {
  console.log("Running Once");
}, []);
```

**Behavior:**
- Runs **only once** after the component is mounted.
- ✅ Commonly used for **API calls** (fetch data once when page loads).

### Case 3: Dependency Array with Values

```jsx
useEffect(() => {
  console.log("Count Changed");
}, [count]);
```

**Behavior:**
- Runs after the first render.
- Runs again **only when `count` changes**.
- If `count` does not change, the effect will not run again.

### Quick Reference Table

| Dependency Array | When Does It Run? |
|------------------|-------------------|
| No array | At start + after every render |
| Empty `[]` | Only once (on mount) |
| With values `[value]` | At start + only when `value` changes |

## Common Uses of useEffect

- Fetching data from APIs
- Calling asynchronous functions
- Using `setTimeout()`
- Using `setInterval()`
- Updating the document title
- Adding and removing event listeners
- Working with browser storage (Local Storage)

---

# 16. Hooks in React

## What are Hooks? (General)

- **Hooks** are **predefined functions** in React, introduced from **version 16**.
- Hooks are used to:
  - Hold state (`useState`)
  - Run side effects (`useEffect`)
  - Access lifecycle behavior
  - Optimize performance (`useMemo`, `useCallback`)
  - Handle DOM refs (`useRef`)

## ⚠️ Rules of Hooks

- Hooks **must be called at the top level** of your component.
- They cannot be called inside loops, conditions, or nested functions.
- Why? Because React identifies hooks by **call order**. If order changes between renders, React gets confused.

```jsx
// ❌ Wrong - hook inside a condition
function Bad() {
  if (true) {
    const [x, setX] = useState(0); // DANGER!
  }
}

// ✅ Correct - hook at top level
function Good() {
  const [x, setX] = useState(0);
}
```

---

## Hook #1: `useState`

**Purpose:** Create a state for a value and maintain it.

### State is Mutable

```jsx
const [value, setValue] = useState(initialValue);
```

- `value` initially contains `initialValue`.
- `setValue` is the function used to **change / replace** the value.
- State is **asynchronous**, so the next synchronous lines will run first.

```jsx
setValue(5);
// The value becomes 5 after re-render
```

### Meaningful Example: Like Button ❤️

```jsx
import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <p>Likes: {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  );
}

export default LikeButton;
```

Every time you click **Like**, the `likes` state changes and the UI re-renders with the new count.

---

## Hook #2: `useEffect`

**Purpose:** Run side effects / async functions, such as API calls, timers, cleanup logic.

```jsx
useEffect(callbackFunction, dependencyArray);
```

### Meaningful Example: Show Current Time (with Cleanup) ⏰

```jsx
import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // Start a timer that updates time every 1 second
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup logic: stops the timer when the component is removed
    return () => clearInterval(timer);
  }, []);

  return <h1>Current Time: {time}</h1>;
}

export default Clock;
```

**Explanation:**
- `useEffect` starts a timer when the component **mounts**.
- The `return () => clearInterval(timer)` is the **cleanup logic** that stops the timer on **unmount**.
- This prevents memory leaks.

> 💡 **Dependency array recap:** Empty `[]` = once. With values = when values change. No array = every render.

---

## Hook #3: `useMemo`

**Purpose:** **Memorize / cache expensive calculations** so they only run when needed.

- Should be used for **strict / heavy calculations** (e.g., factorials, large loops).

```jsx
useMemo(callbackFunction, dependencyArray);
```

### Meaningful Example: Factorial Calculation 🔢

```jsx
import { useMemo, useState } from "react";

function Factorial() {
  const [number, setNumber] = useState(5);
  const [counter, setCounter] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>
        Factorial of {number} is {factorial}
      </p>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
    </div>
  );
}

export default Factorial;
```

**Explanation:**
- The factorial is **only recalculated when `number` changes**.
- Clicking the "Counter" button does **not** recalculate the factorial — it uses the **cached value** from memory.
- Open the console and you'll see "Calculating factorial..." only when `number` changes.

---

## Hook #4: `useCallback`

**Purpose:** **Cache a function** — maintains the **stable identity** of a function.

- Useful when passing callbacks to **memoized children**.
- Useful to **safeguard memoized children** from unnecessary re-rendering.

```jsx
useCallback(callbackFunction, dependencyArray);
```

### What problem does it solve?

Without `useCallback`, the child component gets a **new function** every render → child re-renders even though the function did the same thing. `useCallback` keeps the **same function reference** unless dependencies change.

### Meaningful Example: Memoized Child Component 💾

```jsx
import { useCallback, useState, memo } from "react";

// memo() makes SaveButton skip re-render if props don't change
const SaveButton = memo(({ onSave }) => {
  console.log("SaveButton re-rendered");
  return <button onClick={onSave}>Save</button>;
});

function Editor() {
  const [text, setText] = useState("");

  // onSave keeps the same identity unless `text` changes
  const onSave = useCallback(() => {
    console.log("Saving:", text);
  }, [text]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SaveButton onSave={onSave} />
    </div>
  );
}

export default Editor;
```

**Explanation:**
- `useCallback` keeps `onSave` **stable** between renders.
- `SaveButton` is wrapped in `memo()`, so it does **not re-render** when the function identity stays the same.
- Result: `SaveButton` re-renders only when necessary.

---

## Hook #5: `useRef`

**Purpose:** **DOM manipulation** + storing values that do **not** cause re-renders.

- Creates a **reference** for every element of the DOM.
- Mainly used to store: values, counters, flags, timers, etc.

### Meaningful Example 1: Focus an Input 🎯

```jsx
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FocusInput;
```

**Explanation:**
- `ref={inputRef}` **connects** the input element to the reference.
- Clicking the button calls `inputRef.current.focus()` → directly focuses the input via the DOM.

### Meaningful Example 2: Count Renders (without re-rendering) 📊

```jsx
import { useState, useRef, useEffect } from "react";

function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <p>Value: {count}</p>
      <p>Times rendered: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default RenderCounter;
```

**Explanation:**
- `useRef` holds the render count **without causing a re-render** (unlike `useState`).
- Changing `renderCount.current` never triggers a new render.
- This is the key difference: **useState re-renders, useRef does not.**

### useState vs useRef (quick comparison)

| | `useState` | `useRef` |
|---|------------|----------|
| Changes cause re-render? | ✅ Yes | ❌ No |
| Used for | Dynamic UI data | DOM refs, counters, flags |
| Value updates display | Yes, automatically | No, manual |

---

## Hooks Summary Table

| Hook | Use It For | Re-renders? |
|------|-----------|-------------|
| `useState` | Data that changes → UI | Yes |
| `useEffect` | Side effects (API, timers) | (reruns effect) |
| `useMemo` | Cache expensive calculations | No (cached) |
| `useCallback` | Cache functions (stable identity) | No (cached) |
| `useRef` | DOM refs, values without re-render | No |

---

# 17. React Compiler (React 19+)

Starting from **React 19**, the **React Compiler** automatically handles `useMemo` and `useCallback` optimization for you.

## What This Means for You

- 🔁 **No need** to manually wrap functions with `useMemo` or `useCallback` anymore.
- ⚡ The compiler **automatically memoizes** values and functions when it detects performance benefits.
- ✨ You can focus on **writing clean code** without worrying about manual optimizations.

## Example (Before React 19)

```jsx
// Old way - manual memoization (you had to do this yourself)
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

## Example (React 19+)

```jsx
// New way - the compiler handles it automatically
const value = computeExpensiveValue(a, b);
const callback = () => doSomething(a, b);
```

> 💡 **Note:** While the compiler handles most cases, understanding `useMemo` and `useCallback` is still important for **older React versions** and edge cases.

---

# 18. Events in React

## What Are Events?

Events are **actions performed by the user** that trigger a function call, UI change, or any response.

Common event types:

- **Keyboard events** (`keypress`, `keydown`, `keyup`)
- **Mouse events** (`click`, `hover`, `mouseover`)
- **Form events** (`submit`, `change`, `input`)

## Real-World Example

Imagine a user clicks a button and a **modal (popup)** needs to open. We use the `onClick` event to handle this.

## JSX Event Syntax

In React JSX, all events are written in **camelCase** (first word lowercase, next words capitalized).

```jsx
// ❌ HTML style (wrong in JSX)
<button onclick="add()">Click Me</button>

// ✅ React style (correct - camelCase + function reference)
<button onClick={add}>Click Me</button>

// ✅ With parameters (arrow function wrapper)
<button onClick={() => add(5, 3)}>Click Me</button>
```

> 💡 **Important:** In JSX you pass the **function reference** (`onClick={add}`), not a string. To pass parameters, wrap it: `onClick={() => add(5, 3)}`.

## The Event Object

Every event handler receives an **event object** by default. This object contains useful information about the event.

```jsx
function getData(e) {
  console.log(e.target.textContent); // Gets the text inside the button
}

<button onClick={getData}>Click Me</button>;
```

### Common Event Object Properties

| Property | Description |
|----------|-------------|
| `e.target` | The element that triggered the event |
| `e.target.value` | The value of an input element |
| `e.target.textContent` | The text content of an element |
| `e.preventDefault()` | Prevents the default browser behavior (e.g., form page reload) |

## Example: Form Input Handler

```jsx
function handleChange(e) {
  console.log("User typed:", e.target.value);
}

<input type="text" onChange={handleChange} />;
```

Every time the user types, we get the current value of the input.

---

# 19. Forms in React

## Why Do We Need Forms in React?

Forms are used to **get data from users** (via inputs) and **send it to a backend/server** through APIs.

> Example: A login form → user types email + password → we send it to the server.

## Two Ways to Handle Forms

React provides **two approaches** for managing form data:

1. **Controlled Components**
2. **Uncontrolled Components**

---

## 1. Controlled Components

In controlled components, **React manages the form state** using `useState`. The input value is controlled by React state.

### Key Features

- 🧠 State management is **easy and predictable**
- Uses events like `onChange`, `onSubmit`, `onInput`
- 🔄 Data flows: state → input → back to state (single source of truth)

### Example: Controlled Input

```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the page from reloading
    console.log("Submitted name:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
      <p>You typed: {name}</p>
    </form>
  );
}

export default ControlledForm;
```

### How It Works

1. `name` state holds the current input value.
2. `onChange` updates the state every time user types.
3. `value={name}` ensures the input **always reflects** the state.
4. `onSubmit` handles form submission.
5. `e.preventDefault()` stops the browser from reloading the page.

---

## 2. Uncontrolled Components

In uncontrolled components, the **DOM manages the form state** directly. We access values using `useRef()`.

### Key Features

- 🌲 State is managed by the **DOM**, not React
- Use `useRef()` to access input values
- Simpler but less predictable

### Example: Uncontrolled Input

```jsx
import { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted name:", nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="Enter your name" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

### How It Works

1. `nameRef` creates a reference to the input element.
2. `ref={nameRef}` connects the reference to the input.
3. On submit, `nameRef.current.value` gets the current value **directly from the DOM**.

---

## Controlled vs Uncontrolled: Comparison

| Feature | Controlled | Uncontrolled |
|---------|-----------|--------------|
| **State Management** | React manages state | DOM manages state |
| **Value Access** | Via `useState` | Via `useRef` |
| **Validation** | Easy to implement | Harder to implement |
| **Dynamic Input** | Ideal for dynamic inputs | Good for simple forms |
| **Code Complexity** | Slightly more code | Less code |
| **Predictability** | Highly predictable | Less predictable |

> 💡 **Rule of thumb:** Use **controlled** components 90% of the time. Use **uncontrolled** only for very simple, one-shot form fields (like the uncontrolled example above).

## Form Libraries (Optional, for Complex Forms)

For complex forms, consider using:

- **React Hook Form** — lightweight and performant
- **Formik** — feature-rich form management
- **Zod** — schema-based validation (works with both libraries)

```bash
# Install React Hook Form
npm install react-hook-form

# Install Formik
npm install formik

# Install Zod for validation
npm install zod
```

---

# 20. React Routing

## The Problem

React **cannot** handle routing by default. In traditional websites, clicking a link **reloads the entire page**. That's slow and feels clunky.

## The Solution

To enable navigation between pages **without reloading** the browser, we use **React Router DOM** — the standard library for routing in React web applications.

> 💡 **Result:** Smooth, app-like experience. Only the relevant part swaps — no full page reload.

## Step 1: Install React Router DOM

```bash
npm install react-router-dom
```

## Step 2: Wrap App with BrowserRouter

`<BrowserRouter>` enables routing for the entire application. Wrap your root component with it.

```jsx
// ❌ Without BrowserRouter (routing won't work)
function App() {
  return <div>//code</div>;
}

// ✅ With BrowserRouter (routing enabled)
import { BrowserRouter } from "react-router-dom";

function App() {
  return <BrowserRouter>//code</BrowserRouter>;
}
```

## Step 3: Define Routes

Use `<Routes>` and `<Route>` to define which component shows for which URL path.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### How It Works

| URL | Component Displayed |
|-----|---------------------|
| `localhost:5173/about` | `<About />` |
| `localhost:5173/contact` | `<Contact />` |

## Step 4: Navigate with Link (NOT anchor tags!)

To navigate between pages **without reloading**, use `<Link>` instead of `<a>` tags.

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {/* ❌ Don't use anchor tags - they reload the page */}
      <a href="/about">About</a>

      {/* ✅ Use Link - no page reload */}
      <Link to="/about">Go to About Page</Link>
      <Link to="/contact">Go to Contact Page</Link>
    </nav>
  );
}

export default Navbar;
```

## Complete Example: Simple Multi-Page App

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## Key Points to Remember

| Concept | Description |
|---------|-------------|
| `BrowserRouter` | Wraps the app to enable routing |
| `<Routes>` | Container for all route definitions |
| `<Route>` | Maps a URL path to a component |
| `<Link to="">` | Navigates without reloading the page |
| **Avoid `<a>` tags** | They cause full page reloads in React |

---

# 21. Advanced React Routing

## Advanced Topic 1: 404 Not Found Page

If a user navigates to a URL that **doesn't match any route**, we show a **Not Found page**. Use the wildcard `"*"` path to catch all undefined routes.

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Wildcard route - catches all undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### How It Works

| URL | Component Displayed |
|-----|---------------------|
| `localhost:5173/` | `<Home />` |
| `localhost:5173/anything` | `<NotFound />` |

> ⚠️ **Important:** The `*` route should always be placed **last** — React matches routes in order, so everything else needs to be checked first.

---

## Advanced Topic 2: Programmatic Navigation

Sometimes you need to navigate to another page **programmatically** — after a button click, a form submission, or after a specific time. For this, use the **`useNavigate`** hook.

### Example: Navigate After Button Click

```jsx
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here...
    console.log("User logged in!");

    // Navigate to home page after login
    navigate("/");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
```

### Example: Navigate After 3 Seconds (Auto Redirect)

```jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // Redirect to home after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return <h1>Thank you! Redirecting to home...</h1>;
}

export default ThankYou;
```

### Navigate Back / Forward

```jsx
const navigate = useNavigate();

navigate(-1); // Go back one page (like the browser back button)
navigate(1);  // Go forward one page
```

---

## Advanced Topic 3: URL Parameters

URL parameters let you pass **dynamic values** in the URL. Use the **`useParams`** hook to access them.

> **Example URL:** `https://amazon.com/product/123456` — here `123456` is the dynamic value.

### Example: Dynamic Route with URL Params

```jsx
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  return <h1>Product ID: {productId}</h1>;
}

function ProductList() {
  return (
    <div>
      <h1>Products</h1>
      <Link to="/product/101">Product 101</Link>
      <br />
      <Link to="/product/202">Product 202</Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### How It Works

| URL | `useParams()` Returns | Displayed |
|-----|----------------------|-----------|
| `/product/101` | `{ productId: "101" }` | Product ID: 101 |
| `/product/202` | `{ productId: "202" }` | Product ID: 202 |

> 💡 **Remember:** The `:` prefix in `:productId` tells React Router that this is a **dynamic parameter** (the actual value can be anything).

---

## Advanced Topic 4: Nested Routes

When one route is **inside another route**, they are called **nested routes**. Use the **`<Outlet />`** component to render child routes.

### Example: Dashboard with Nested Routes

```jsx
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

// Parent Layout Component
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Child routes render here */}
      <Outlet />
    </div>
  );
}

// Child Components
function Profile() {
  return <h2>User Profile</h2>;
}

function Settings() {
  return <h2>User Settings</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Route */}
        <Route path="dashboard" element={<Dashboard />}>
          {/* Child Routes (nested inside parent) */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### How It Works

| URL | Component Displayed |
|-----|---------------------|
| `/dashboard` | `<Dashboard />` (no child — Outlet is empty) |
| `/dashboard/profile` | `<Dashboard />` + `<Profile />` |
| `/dashboard/settings` | `<Dashboard />` + `<Settings />` |

### Visual Structure

```
/dashboard          → Shows Dashboard + Outlet (empty)
/dashboard/profile  → Shows Dashboard + Profile in Outlet
/dashboard/settings → Shows Dashboard + Settings in Outlet
```

> 💡 **Key idea:** The `<Outlet />` is a **placeholder** inside the parent route where the child route's content gets injected.

---

## Advanced Routing: Quick Reference

| Feature | Hook / Component | Purpose |
|---------|-----------------|---------|
| **404 Page** | `<Route path="*">` | Catch all undefined routes |
| **Programmatic Nav** | `useNavigate()` | Navigate without `<Link>` |
| **URL Parameters** | `useParams()` | Get dynamic values from URL |
| **Nested Routes** | `<Outlet />` | Render child routes inside parent |

---

# 22. Context API

## The Problem: Prop Drilling

In React, data flows from parent to child via **props**. But sometimes, a value needs to go from a **top-level component** to a **deeply nested component**. This forces the value to pass through **multiple middle components** that don't even use it.

This problem is called **Prop Drilling**.

### What is Prop Drilling?

Prop Drilling is the process of passing data from a parent component through **multiple intermediate components** to reach a deeply nested child component, even though those intermediate components **don't need the data**.

### Visual Example

```
App (has user data)
 └── Header
      └── Navbar
           └── UserProfile (needs user data)
```

If `App` wants to send `user` data to `UserProfile`, it must travel through `Header` and `Navbar`:

```jsx
// ❌ Prop Drilling - Passing data through unnecessary components
<App user={user}>
  <Header user={user}>      // Header doesn't use user!
    <Navbar user={user}>    // Navbar doesn't use user!
      <UserProfile user={user} />  // Finally uses user!
    </Navbar>
  </Header>
</App>
```

### Why is Prop Drilling a Problem?

| Problem | Description |
|---------|-------------|
| **Messy Code** | Intermediate components receive props they don't need |
| **Hard to Maintain** | Changes in data structure require updating multiple components |
| **Performance Issues** | Unnecessary re-renders in components that just pass props |
| **Confusing** | Hard to track where data is coming from |

## The Solution: Context API

**Context API** solves prop drilling by providing a way to **share data globally** across the component tree without passing props manually through every level.

> 💡 Think of Context as a **global container** that any component can access directly — like a public notice board that everyone can read.

---

## How to Use Context API: Step-by-Step

### Step 1: Create a Context

Use `createContext()` to create a new context.

```jsx
import { createContext } from "react";

// Create the context with a default value
const UserContext = createContext("Guest"); // default value
```

### Step 2: Provide the Context to the App

Use the `Provider` component to make the context value available to all child components.

```jsx
import { UserContext } from "./UserContext";

function App() {
  const user = "Ajaya";

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}
```

Now **every component inside** `UserContext.Provider` can access the `user` value.

### Step 3: Consume the Context in Any Component

Use the `useContext()` hook to access the context value.

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return <h2>Welcome, {user}!</h2>;
}
```

### Complete Working Example

```jsx
import { createContext, useContext } from "react";

// Step 1: Create context
const UserContext = createContext("Guest");

// Child Component (deeply nested)
function UserProfile() {
  const user = useContext(UserContext);
  return <h2>User Profile: {user}</h2>;
}

// Intermediate Component (doesn't use user - just renders children)
function Navbar() {
  return (
    <nav>
      <UserProfile />
    </nav>
  );
}

// Another Intermediate Component
function Header() {
  return (
    <header>
      <Navbar />
    </header>
  );
}

// Parent Component (provides the value)
function App() {
  const user = "Ajaya";

  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  );
}

export default App;
```

**Result:** `UserProfile` directly receives `"Ajaya"` **without prop drilling**! Notice that `Navbar` and `Header` don't pass anything — they just render their children.

---

## Props vs Context API

| Feature | Props | Context API |
|---------|-------|-------------|
| **Data Flow** | Parent to Child | Global (any component) |
| **Middle Components** | Must pass through | Not needed |
| **Code Complexity** | Increases with depth | Stays clean |
| **Best For** | Simple parent-child | Deeply nested data |

## When to Use Context API

- 🌗 **Theme data** (dark mode / light mode)
- 🔐 **User authentication** (logged-in user info)
- 🌍 **Language / locale** (internationalization)
- 📦 **Any data needed by many components** at different nesting levels

## Common Mistakes to Avoid

```jsx
// ❌ Wrong: Creating context inside a component
function App() {
  const UserContext = createContext(); // Creates NEW context every render!
  return <UserContext.Provider value="Ajaya">...</UserContext.Provider>;
}

// ✅ Correct: Create context OUTSIDE the component
const UserContext = createContext();

function App() {
  return <UserContext.Provider value="Ajaya">...</UserContext.Provider>;
}
```

---

# 23. React Redux

## The Problem Context API Doesn't Solve

Context API works well for small apps. But for **large, complex applications** with lots of shared state, we need a more **robust and predictable** solution. That's where **Redux** comes in.

## What is Redux?

Redux is an **open-source JavaScript library** used to **manage application state**.

- Introduced by **Dan Abramov and Andrew Clark** in **2015**.
- **React Redux** is the official React binding for Redux. It allows React components to:
  - **Read data** from a Redux Store
  - **Dispatch Actions** to update data in the Store

## Why Use Redux?

| Benefit | Description |
|---------|-------------|
| **Official Binding** | Kept up-to-date with React API changes |
| **Good Architecture** | Encourages clean React patterns |
| **Performance** | Components re-render only when needed |
| **Scalable** | Manages state through unidirectional data flow |

---

## Redux vs Flux

Redux was inspired by an earlier pattern called **Flux** (also by Facebook).

| Feature | Redux | Flux |
|---------|-------|------|
| **Stores** | Single Store | Multiple Stores |
| **Dispatcher** | No Dispatcher | Has Dispatcher |
| **Action Handling** | Store handles actions directly | Dispatcher forwards to Store |

> 💡 Redux was inspired by Flux but **removed unnecessary complexity**.

---

## Redux Architecture: Visual Guide

```
┌─────────────────────────────────────────────────────────────────┐
│                      REDUX ARCHITECTURE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐                 │
│   │  VIEW    │───▶│  ACTION  │───▶│ REDUCER  │                 │
│   │ (React)  │    │ (Object) │    │ (Func)   │                 │
│   └──────────┘    └──────────┘    └──────────┘                 │
│        ▲                                    │                   │
│        │                                    ▼                   │
│        │                              ┌──────────┐             │
│        └──────────────────────────────│  STORE   │             │
│                                       │ (State)  │             │
│                                       └──────────┘             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## The 3 Pillars of Redux

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐     │
│   │    STORE    │   │   ACTION    │   │  REDUCER    │     │
│   │             │   │             │   │             │     │
│   │ • Holds     │   │ • Payload   │   │ • Pure      │     │
│   │   entire    │   │   describing│   │   function  │     │
│   │   app state │   │   event     │   │             │     │
│   │             │   │             │   │ • Takes     │     │
│   │ • Single    │   │ • Type +    │   │   Action +  │     │
│   │   source    │   │   data      │   │   State     │     │
│   │   of truth  │   │             │   │             │     │
│   │             │   │ • Dispatched│   │ • Returns   │     │
│   │ • brain of  │   │   by View   │   │   new State │     │
│   │   Redux     │   │             │   │             │     │
│   └─────────────┘   └─────────────┘   └─────────────┘     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Pillar 1: Store

> A Store is where the **entire state** of your application lives. It manages the application status and has a `dispatch(action)` function.

**Think of it as:** The **brain** responsible for all moving parts in Redux. There is only **one store** in an app.

### Pillar 2: Action

> Actions are **payloads** (objects) sent from the View that can be read by Reducers. They are plain objects containing information about **what happened**.

```jsx
{
  type: 'ADD_TODO',     // What happened? (always has a type)
  id: 1,                // Additional data
  text: 'Learn Redux'   // Payload
}
```

### Pillar 3: Reducer

> Reducers read payloads from Actions and update the Store via state. They are **pure functions** that return a **new state** from the initial state.

```jsx
// (previousState, action) => newState
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state; // important: if no match, return existing state
  }
}
```

> 💡 **Pure function** means: same input always gives the same output, and it does **not modify** the original state (returns a copy instead).

---

## Redux Data Flow: Step by Step

```
┌────────────────────────────────────────────────────────────────────┐
│                    UNIDIRECTIONAL DATA FLOW                        │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  STEP 1: User interacts with UI                                    │
│  ┌──────────────────┐                                              │
│  │   User clicks    │                                              │
│  │   "Add Todo"     │                                              │
│  └────────┬─────────┘                                              │
│           │                                                        │
│  STEP 2: Dispatch Action                                           │
│  ┌────────▼─────────┐                                              │
│  │  dispatch({      │                                              │
│  │    type: 'ADD',  │                                              │
│  │    text: 'Buy'   │                                              │
│  │  })              │                                              │
│  └────────┬─────────┘                                              │
│           │                                                        │
│  STEP 3: Reducer processes                                         │
│  ┌────────▼─────────┐                                              │
│  │  switch(action.  │                                              │
│  │    type) {       │                                              │
│  │    case 'ADD':   │                                              │
│  │      return     │                                              │
│  │      newState   │                                              │
│  │  }              │                                              │
│  └────────┬─────────┘                                              │
│           │                                                        │
│  STEP 4: Store updates                                             │
│  ┌────────▼─────────┐                                              │
│  │  Store replaces  │                                              │
│  │  state with      │                                              │
│  │  newState        │                                              │
│  └────────┬─────────┘                                              │
│           │                                                        │
│  STEP 5: UI re-renders                                             │
│  ┌────────▼─────────┐                                              │
│  │  Components      │                                              │
│  │  re-render with  │                                              │
│  │  new data        │                                              │
│  └──────────────────┘                                              │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Installation

**Requirements:** React 16.8.3 or later

```bash
npm install redux react-redux --save
```

- `redux` — the core state management library
- `react-redux` — the bridge between React and Redux

---

## Project Structure

We'll build a **Todo App** to learn Redux properly. This is the classic Redux tutorial example.

```
src/
├── actions/
│   └── index.js          # Action creators
├── reducers/
│   ├── index.js          # combineReducers
│   ├── todos.js          # Todo reducer
│   └── visibilityFilter.js
├── components/
│   ├── App.js
│   ├── Todo.js
│   ├── TodoList.js
│   ├── Footer.js
│   └── Link.js
├── containers/
│   ├── AddTodo.js
│   ├── FilterLink.js
│   └── VisibleTodoList.js
└── index.js              # Store creation & Provider
```

> 💡 **Note the pattern:** `actions` (what happened) → `reducers` (how state changes) → `components` (pure UI) → `containers` (connect UI to Redux) → `index.js` (glue everything).

---

## Step 1: Create Actions

Actions describe **what happened** in the app.

```jsx
// actions/index.js
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
```

### Visual Flow

```
User clicks "Add Todo"
        │
        ▼
┌─────────────────────┐
│ dispatch(           │
│   addTodo("Learn")  │
│ )                   │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ {                   │
│   type: 'ADD_TODO', │
│   id: 0,            │
│   text: 'Learn'     │
│ }                   │
└─────────────────────┘
```

> 💡 An **action creator** is a function that returns an action object. Here `addTodo()` returns `{ type, id, text }`.

---

## Step 2: Create Reducers

Reducers specify **how state changes** in response to actions.

### todos.js — manages the todo list

```jsx
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,                                  // spread old todos
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed } // flip completed
          : todo
      );
    default:
      return state;
  }
};

export default todos;
```

### visibilityFilter.js — manages the active filter

```jsx
import { VisibilityFilters } from "../actions";

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
```

### reducers/index.js — combine reducers into one root reducer

```jsx
import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter,
});
```

> 💡 **Why combineReducers?** Redux has a **single store**, so all the separate reducers get combined into **one root reducer**.

### Visual

```
Action: { type: 'ADD_TODO', text: 'Learn Redux' }
                    │
                    ▼
        ┌─────────────────────┐
        │    todos Reducer    │
        │                     │
        │  state = []         │
        │       +             │
        │  action.payload     │
        │       =             │
        │  [{ id: 0,          │
        │     text: 'Learn',  │
        │     completed: false│
        │  }]                 │
        └─────────────────────┘
```

---

## Step 3: Create Presentational Components

These components **only render UI** — they **don't know about Redux** at all.

### Todo.js — a single todo item

```jsx
import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
```

### TodoList.js — renders the list of todos

```jsx
import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
    ))}
  </ul>
);

export default TodoList;
```

### Footer.js

```jsx
import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";

const Footer = () => (
  <p>
    Show:{" "}
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>,{" "}
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>,{" "}
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
);

export default Footer;
```

---

## Step 4: Create Container Components

Container components **connect Redux to React components** using `connect()`.

### AddTodo.js — sends an ADD_TODO action

```jsx
import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) return;   // ignore empty text
          dispatch(addTodo(input.value));    // send action to store
          input.value = "";                  // clear input
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
```

### VisibleTodoList.js — reads store + dispatches toggle

```jsx
import { connect } from "react-redux";
import { toggleTodo, VisibilityFilters } from "../actions";
import TodoList from "../components/TodoList";

// Helper: pick which todos to show based on the active filter
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

// Reads state from the store and passes it as props
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

// Provides functions that dispatch actions
const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
```

> 💡 **The two magic functions:**
> - `mapStateToProps(state)` — takes store state → returns props (data).
> - `mapDispatchToProps(dispatch)` — takes dispatcher → returns action-calling props (functions).

### Visual: Container vs Presentational

```
┌──────────────────────────────────────────────────────────────┐
│              CONTAINER vs PRESENTATIONAL                     │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────┐      ┌─────────────────────┐       │
│  │   Container (Redux) │      │  Presentational     │       │
│  │                     │      │  (UI only)          │       │
│  │  • Knows Redux      │──────▶  • Renders props    │       │
│  │  • Dispatches       │      │  • No Redux knowledge│      │
│  │  • Connects to      │      │  • Reusable         │       │
│  │    store            │      │                     │       │
│  └─────────────────────┘      └─────────────────────┘       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Step 5: Create Store and Provider

### index.js — the entry point

```jsx
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

// Wrap App with Provider to make store available everywhere
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### Visual: The Provider Pattern

```
┌─────────────────────────────────────────────────────────────┐
│                    PROVIDER PATTERN                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              <Provider store={store}>               │   │
│  │  ┌─────────────────────────────────────────────┐   │   │
│  │  │                  <App />                    │   │   │
│  │  │                                             │   │   │
│  │  │   ┌─────────────┐     ┌─────────────┐     │   │   │
│  │  │   │  Container  │     │  Container  │     │   │   │
│  │  │   │  (AddTodo)  │     │ (TodoList)  │     │   │   │
│  │  │   └──────┬──────┘     └──────┬──────┘     │   │   │
│  │  │          │                    │            │   │   │
│  │  │          ▼                    ▼            │   │   │
│  │  │   ┌─────────────┐     ┌─────────────┐     │   │   │
│  │  │   │  Component  │     │  Component  │     │   │   │
│  │  │   │  (Form UI)  │     │  (List UI)  │     │   │   │
│  │  │   └─────────────┘     └─────────────┘     │   │   │
│  │  └─────────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  All components inside Provider can access the store!       │
└─────────────────────────────────────────────────────────────┘
```

---

## Complete App Component

```jsx
import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
```

---

## Redux State Structure

```jsx
// Initial State Structure
{
  todos: [
    { id: 0, text: "Learn React", completed: false },
    { id: 1, text: "Learn Redux", completed: false }
  ],
  visibilityFilter: "SHOW_ALL"
}
```

### Visual

```
┌─────────────────────────────────────────────────────────────┐
│                    REDUX STORE STATE                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                     STATE                           │   │
│  ├─────────────────────────────────────────────────────┤   │
│  │  ┌───────────────────────────────────────────────┐ │   │
│  │  │                  todos                        │ │   │
│  │  ├───────────────────────────────────────────────┤ │   │
│  │  │  [                                            │ │   │
│  │  │    { id: 0, text: "Learn React", completed: false }│ │   │
│  │  │    { id: 1, text: "Learn Redux", completed: false }│ │   │
│  │  │  ]                                            │ │   │
│  │  └───────────────────────────────────────────────┘ │   │
│  │  ┌───────────────────────────────────────────────┐ │   │
│  │  │            visibilityFilter                   │ │   │
│  │  ├───────────────────────────────────────────────┤ │   │
│  │  │              "SHOW_ALL"                       │ │   │
│  │  └───────────────────────────────────────────────┘ │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Redux: Key Concepts Summary

| Concept | What It Does | Example |
|---------|-------------|---------|
| **Store** | Holds entire app state | `createStore(rootReducer)` |
| **Action** | Describes what happened | `{ type: 'ADD_TODO', text: '...' }` |
| **Reducer** | Returns new state based on action | `switch(action.type) { ... }` |
| **Dispatch** | Sends action to store | `dispatch(addTodo('Learn'))` |
| **connect()** | Links Redux to React component | `connect(mapState, mapDispatch)(Comp)` |
| **Provider** | Makes store available to all components | `<Provider store={store}>` |

---

# 24. Quick Recap

| Topic | One-Line Summary |
|-------|------------------|
| **React** | A JavaScript library for building user interfaces. |
| **JSX** | Lets us write HTML inside JavaScript. |
| **Component** | A reusable and independent part of the UI. |
| **Props** | Pass data from parent to child (read-only). |
| **State** | Data that changes over time and causes re-rendering. |
| **Virtual DOM** | A lightweight copy of the UI used for efficient updates. |
| **API** | A bridge between the client and the server. |
| **Fetch** | Built-in browser method for HTTP requests. |
| **Axios** | Third-party library for HTTP requests. |
| **useState** | Hook for managing state in function components. |
| **useEffect** | Hook for side effects like API calls. |
| **useMemo** | Hook for caching expensive calculations. |
| **useCallback** | Hook for caching functions (stable identity). |
| **useRef** | Hook for DOM manipulation and storing values. |
| **React Compiler** | Automatically handles memoization in React 19+. |
| **Events** | User actions that trigger functions (camelCase in JSX). |
| **Controlled Forms** | React manages form state via useState. |
| **Uncontrolled Forms** | DOM manages form state via useRef. |
| **React Router** | Enables navigation without page reloads. |
| **useNavigate** | Navigate programmatically without page reloads. |
| **useParams** | Access dynamic URL parameters. |
| **Outlet** | Renders child routes inside a parent route. |
| **Context API** | Share data globally without prop drilling. |
| **Prop Drilling** | Passing props through unnecessary intermediate components. |
| **Redux** | State management library for complex apps. |
| **Store** | Single source of truth holding entire app state. |
| **Action** | Plain object describing what happened. |
| **Reducer** | Pure function that returns new state. |
| **dispatch()** | Sends actions to the Redux store. |
| **connect()** | Links Redux store to React components. |
| **Provider** | Makes store available to all child components. |

---

## Final Words 🎓

You've now covered **all the major topics of React**, from the very basics (what is React) to advanced concepts (Redux). Here's your learning path:

```
Beginner Level:
✅ What is React → Setup → JSX → Components → Props → State

Intermediate Level:
✅ Virtual DOM → APIs (Fetch/Axios) → useEffect → All Hooks
✅ Events → Forms → React Router

Advanced Level:
✅ Context API → Redux
```

**Happy learning with React! 🚀**