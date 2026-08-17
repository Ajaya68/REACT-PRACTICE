# React Notes for Beginners

A simple, beginner-friendly guide to understanding React.

---

## Table of Contents

1. [What is React?](#what-is-react)
2. [React.js vs React Native](#reactjs-vs-react-native)
3. [Major Uses of React](#major-uses-of-react)
4. [Competitors and Advantages of React](#competitors-and-advantages-of-react)
5. [Setting Up Your First React App](#setting-up-your-first-react-app)
6. [Understanding NPM](#understanding-npm)
7. [React Files & Folders](#react-files--folders)
8. [The 4 Core Topics of React](#the-4-core-topics-of-react)
   - [Components](#components)
   - [Props](#props)
   - [State](#state)
   - [APIs](#apis)
9. [Virtual DOM](#virtual-dom)
10. [Working with APIs](#working-with-apis)
    - [What is an API?](#what-is-an-api)
    - [Fetch API](#1-fetch-api)
    - [Axios](#2-axios)
    - [Fetch vs Axios](#fetch-vs-axios)
11. [useEffect Hook](#useeffect-hook)
    - [Dependency Array](#dependency-array-in-useeffect)
    - [Component Lifecycle](#component-lifecycle-and-useeffect)
12. [Hooks in React](#hooks-in-react)
    - [useState](#1-usestate)
    - [useEffect](#2-useeffect)
    - [useMemo](#3-usememo)
    - [useCallback](#4-usecallback)
    - [useRef](#5-useref)
13. [React Compiler (React 19+)](#react-compiler-react-19)
14. [Events in React](#events-in-react)
15. [Forms in React](#forms-in-react)
    - [Controlled Components](#1-controlled-components)
    - [Uncontrolled Components](#2-uncontrolled-components)
16. [React Routing](#react-routing)

---

## What is React?

- React is an **open-source JavaScript library** used to build **user interfaces**.
- React is **developed and maintained by Meta (Facebook)**.
- In **2012**, many people around the world used Facebook. To improve the user experience, Facebook built its own library called **React**, and in **2014** they made it **open source**.

---

## React.js vs React Native

| React.js                                 | React Native                     |
| ---------------------------------------- | -------------------------------- |
| Used for **web applications** / websites | Used for **mobile applications** |

---

## Major Uses of React

React is mainly used to build the UI of:

- **SPA (Single Page Application):** An application that loads only a specific part of the UI instead of the whole page.
- **PWA (Progressive Web Application):** An application that feels like a native app.

---

## Competitors and Advantages of React

- React can be replaced with **Angular** or **Vue**.
- **Angular** is a JavaScript _framework_.
- **Vue** is also a JavaScript _library_.
- Advantages of React over its competitors:
  - Simpler and easier to learn
  - Supports **Virtual DOM** for better performance

---

## Setting Up Your First React App

Follow these steps to create your first React app:

1. **Install VS Code** editor.
2. **Install NPM** (Node Package Manager).
3. **Use a bundler** to get a ready-made React template. The bundler gives you the basic boilerplate code, so you don't need to create every single file manually.

### Commands

```bash
# Create a new React app (using Vite)
npm create vite@latest

# Run the application
npm run dev

# Build for production
npm run build
```

---

## Understanding NPM

- NPM is a **software tool** used by developers to **download, install, update, or delete** frameworks and libraries in a project.

---

## React Files & Folders

| File / Folder       | Purpose                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| `package.json`      | Contains **metadata** about your application.                                                   |
| `package-lock.json` | Contains metadata of `package.json`.                                                            |
| `vite.config.js`    | Contains settings for **Vite**.                                                                 |
| `.gitignore`        | Contains files that are **ignored by Git**.                                                     |
| `eslint`            | **Notifies and observes errors** in the code.                                                   |
| `node_modules`      | Contains the **actual code** of all installed packages.                                         |
| `public`            | For **static resources**.                                                                       |
| `src`               | For **dynamic resources**.                                                                      |
| `index.html`        | **Main entry point** of the app; contains the `head` and `body`.                                |
| `main.jsx`          | **Renders** `App.jsx` into the `div` with id `root`. In React, loading is called **rendering**. |
| `App.jsx`           | Contains the **actual body code** in JSX format.                                                |

---

## About JSX

- React code is written in files called **JSX** (JavaScript Extensible). JSX lets us write **HTML inside JavaScript**.
- Every JSX file should **return one HTML element**.
- The file name and the component/function name should be **the same** (best practice: start the function name with an **uppercase** letter).
- In JSX, the `class` property is written as **`className`**, because `class` is a reserved keyword in JavaScript.
- In JSX, it is **mandatory to close all tags**, including self-closing tags.

---

## The 4 Core Topics of React

React basically deals with 4 main topics:

1. **Components**
2. **Props**
3. **State and Virtual DOM**
4. **APIs**

---

## Components

- A component is a **reusable and independent** part of the user interface.
- React divides a large UI into smaller, logical, reusable parts called **components**.

### Example

A shopping website can have these components:

- Navbar
- ProductCard
- ProductList
- Cart
- Footer

### Advantages of Components

- Reusable
- Easy to maintain
- Easy to understand
- Organized
- Can be composed together to create a complete application

### Types of Components

React components can mainly be written in two ways:

1. **Function Components** (used in modern React development)
2. **Class Components**

### Example: Function Component

```jsx
function Student() {
  return <h1>Student Component</h1>;
}
```

---

## Props

- **Props** is short for **Properties**.
- Props are used to pass data from a **parent component** to a **child component**.
- A component receives props as an **object containing key-value pairs**.

### Example

```jsx
function Student(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return <Student name="Ajaya" />;
}
```

Here, `name = "Ajaya"` is passed from the `App` component to the `Student` component.

### Important Points About Props

- Props are used to pass data between components.
- Props are generally passed from **parent to child**.
- Props are **read-only** inside the receiving component.
- Props help make components **reusable**.

---

## State

- **State** is data that belongs to a component and can **change over time**.
- When state changes, React **re-renders** the component so the UI displays the updated data.

### Example

A counter can have:

```
count = 0
```

After clicking a button:

```
count = 1
```

The UI updates according to the new state.

### Important Characteristics of State

- State can change over time.
- State is generally **local** to the component that owns it.
- Changing state can cause the component to **re-render**.
- State is used for **dynamic and interactive UI**.

### How to Manage State Using `useState`

React provides a Hook called **`useState`** for managing state in function components.

#### What is a Hook?

A **Hook** is a special React function that allows function components use React features such as:

- State
- Effects
- Context
- References

Examples of Hooks:

```jsx
useState();
useEffect();
useContext();
useRef();
```

#### `useState()` Syntax

The `useState` Hook gives us:

- The **current state value**
- A **function** used to update that state

It returns these values in the form of an **array**.

```jsx
const [value, setValue] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);
```

Here:

| Part       | Meaning                           |
| ---------- | --------------------------------- |
| `count`    | Current state value               |
| `setCount` | Function used to update the state |
| `0`        | Initial value                     |

> **Note:** State in React is **asynchronous** (it takes some time to run). So the line after `setX()` will be executed first.

```jsx
let x = 0;
setX(x + 1); // takes some time to set x = 1
console.log(x); // x = 0
```

#### Complete Example: Counter

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

The state changes and React updates the UI.

---

## Virtual DOM

- The **Virtual DOM** is a lightweight representation of the UI that React uses to determine what needs to change.

### How It Works

When state or props change:

1. React creates an **updated representation** of the UI.
2. React **compares** it with the previous representation.
3. React determines what **actually needs to change**.
4. React updates the **required parts** of the actual DOM.

This helps React update the UI **efficiently**.

---

## Working with APIs

### What is an API?

- **API** stands for **Application Programming Interface**.
- An API acts as a **bridge between the client and the server**.
- It allows the client to send requests to the server and receive responses.

### How Does an API Work?

1. The **client** (browser or React app) sends a request.
2. The **server** processes the request.
3. The **server** sends the response back through the API.
4. The client displays the received data.

### REST API

- The most commonly used APIs in web development are **REST APIs**.
- REST APIs usually send and receive data in **JSON** (JavaScript Object Notation) format.

Example of JSON:

```json
[
  {
    "id": 1,
    "name": "Ajaya",
    "course": "MCA"
  }
]
```

### How to Call an API?

There are two common ways to request data from an API:

#### 1. Fetch API

- **Fetch** is the **built-in browser method** used to make HTTP requests.
- It does **not require any installation**.

Syntax:

```js
fetch(url, options);
```

Example:

```js
fetch("https://api.example.com/users");
```

#### 2. Axios

- **Axios** is a **third-party JavaScript library** used to make HTTP requests.
- It provides additional features compared to Fetch.
- Axios must be **installed before use**.

```bash
npm install axios
```

Import Axios:

```js
import axios from "axios";
```

Syntax:

```js
axios.get(url);
// or
axios.post(url, data);
```

### Fetch vs Axios

| Fetch                       | Axios                             |
| --------------------------- | --------------------------------- |
| Built into the browser      | Third-party library               |
| No installation required    | Requires installation             |
| Returns a `Response` object | Returns data directly in response |
| Slightly more code          | Cleaner and simpler syntax        |

### Fetch and Axios are Asynchronous

- Both **Fetch** and **Axios** are asynchronous.
- They return a **Promise**.
- A Promise can be handled using:
  - `.then()` and `.catch()`
  - `async` and `await`

#### Using Fetch with `.then()` and `.catch()`

```js
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

**Explanation:**

- `fetch()` sends the request.
- `response.json()` converts the response into JavaScript objects.
- `.then()` receives the data.
- `.catch()` handles errors.

#### Using Fetch with Async/Await

```js
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
```

**Explanation:**

- `async` allows us to use `await`.
- `await` waits until the Promise is completed.
- The response is converted into JSON.
- Finally, the data is displayed.

---

## Handling APIs in React

### useEffect Hook

**`useEffect`** is a React Hook used to perform **side effects** in a React component.

Side effects include:

- Fetching data from an API
- Using `setTimeout()`
- Using `setInterval()`
- Updating the document title
- Working with browser events

Syntax:

```jsx
useEffect(() => {
  // Code
}, [dependencyArray]);
```

### Why Use useEffect for API Calls?

- API requests are **asynchronous**.
- We usually want to fetch data **after the component is rendered**.
- `useEffect()` is the **recommended place** to perform API calls in React.

Example:

```jsx
useEffect(() => {
  fetchData();
}, []);
```

Here, `fetchData()` will be called when the component is loaded.

---

## Dependency Array in useEffect

The behavior of `useEffect()` depends on the **dependency array**.

### Case 1: No Dependency Array

```jsx
useEffect(() => {
  console.log("Running");
});
```

**Behavior:**

- Runs after **every render**.
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
- Commonly used for **API calls**.

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

### Common Uses of useEffect

- Fetching data from APIs
- Calling asynchronous functions
- Using `setTimeout()`
- Using `setInterval()`
- Updating the document title
- Adding and removing event listeners
- Working with browser storage (Local Storage)

---

## Component Lifecycle and useEffect

A React component goes through **three main stages**:

1. **Mounting** – The component is created and added to the screen.
2. **Updating** – The component re-renders when state or props change.
3. **Unmounting** – The component is removed from the screen.

`useEffect()` can be used during all these stages, depending on how it is written.

---

## Hooks in React

- **Hooks** are **predefined functions** in React, introduced from **version 16**.
- Hooks are used to:
  - Hold state (`useState`)
  - Run side effects (`useEffect`)
  - Access lifecycle behavior
  - Integrate with concurrent rendering
- Hooks **must be called at the top level** of your component, because React identifies them by **call order**.

### The Main / Popular Hooks

#### 1. useState

- Its purpose is to **create a state** for a value and **maintain it**.

##### State is Mutable

```jsx
const [value, setValue] = useState(initialValue);
```

- `value` initially contains `initialValue`.
- `setValue` is the function used to **change / replace** the value.
- State is **asynchronous**, so the next synchronous lines will run first.

Example:

```jsx
setValue(5);
```

##### Meaningful Example: Like Button

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

#### 2. useEffect

- Used to run **side effects / async functions** such as:
  - API calls
  - Timers
  - Cleanup logic

Syntax:

```jsx
useEffect(callbackFunction, dependencyArray);
```

Dependency array behavior:

| Dependency Array      | When Does It Run?                                  |
| --------------------- | -------------------------------------------------- |
| Empty `[]`            | Runs **once**                                      |
| With values `[value]` | Runs at start and every time those values change   |
| No dependency array   | Runs at start and every time **any** state changes |

##### Meaningful Example: Show Current Time

```jsx
import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup: stops the timer when the component is removed
    return () => clearInterval(timer);
  }, []);

  return <h1>Current Time: {time}</h1>;
}

export default Clock;
```

- `useEffect` starts a timer when the component mounts.
- The `return () => clearInterval(timer)` is the **cleanup logic** that stops the timer on unmount.

#### 3. useMemo

- Used to **memorize / cache expensive calculations**.
- Should be used for **strict / heavy calculations**.

Syntax:

```jsx
useMemo(callbackFunction, dependencyArray);
```

##### Meaningful Example: Factorial Calculation

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

- The factorial is **only recalculated when `number` changes**.
- Clicking the Counter button does **not** recalculate the factorial (it uses the cached value).

#### 4. useCallback

- Used to **cache a function**.
- Maintains the **stable identity** of a function.
- Useful when passing callbacks to **memoized children**.
- Useful to **safeguard memoized children from re-rendering** due to changing dependencies.

Syntax:

```jsx
useCallback(callbackFunction, dependencyArray);
```

##### Meaningful Example: Memoized Child Component

```jsx
import { useCallback, useState, memo } from "react";

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

- `useCallback` keeps `onSave` **stable** between renders.
- `SaveButton` is wrapped in `memo()`, so it does **not re-render** when the function identity stays the same.

#### 5. useRef

- Used for **DOM manipulation**.
- Creates a **reference** for every element of the DOM.
- Mainly used to store:
  - Values
  - Counters
  - Flags
  - Timers, etc.

##### Meaningful Example: Focus an Input

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

- `ref={inputRef}` connects the input to the reference.
- Clicking the button calls `inputRef.current.focus()` to focus the input box directly via the DOM.

##### Meaningful Example: Count Renders (without re-rendering)

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

- `useRef` holds the render count **without causing a re-render** (unlike `useState`).
- Changing `renderCount.current` never triggers a new render.

---

## React Compiler (React 19+)

Starting from **React 19**, the **React Compiler** automatically handles `useMemo` and `useCallback` optimization.

### What This Means for You

- **No need** to manually wrap functions with `useMemo` or `useCallback` anymore
- The compiler **automatically memoizes** values and functions when it detects performance benefits
- You can focus on writing clean code without worrying about manual optimizations

### Example (Before React 19)

```jsx
// Old way - manual memoization
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

### Example (React 19+)

```jsx
// New way - compiler handles it automatically
const value = computeExpensiveValue(a, b);
const callback = () => doSomething(a, b);
```

> **Note:** While the compiler handles most cases, understanding `useMemo` and `useCallback` is still important for older React versions and edge cases.

---

## Events in React

### What Are Events?

Events are **actions performed by the user** that trigger a function call, UI change, or any response. Common event types include:

- **Keyboard events** (keypress, keydown)
- **Mouse events** (click, hover)
- **Form events** (submit, change)

### Real-World Example

Imagine a user clicks a button and a modal needs to open. We use the `onClick` event to handle this.

### JSX Event Syntax

In React JSX, all events are written in **camelCase**:

```jsx
// ❌ HTML style (wrong in JSX)
<button onclick="add()">Click Me</button>

// ✅ React style (correct)
<button onClick={add}>Click Me</button>

// With parameters
<button onClick={() => add(5, 3)}>Click Me</button>
```

### The Event Object

Every event handler receives an **event object** by default. This object contains useful information about the event:

```jsx
function getData(e) {
  console.log(e.target.textContent); // Gets the text inside the button
}

<button onClick={getData}>Click Me</button>;
```

### Common Event Object Properties

| Property               | Description                           |
| ---------------------- | ------------------------------------- |
| `e.target`             | The element that triggered the event  |
| `e.target.value`       | The value of an input element         |
| `e.target.textContent` | The text content of an element        |
| `e.preventDefault()`   | Prevents the default browser behavior |

### Example: Form Input Handler

```jsx
function handleChange(e) {
  console.log("User typed:", e.target.value);
}

<input type="text" onChange={handleChange} />;
```

---

## Forms in React

Forms are used to **get data from users** (via inputs) and send it to a backend/server through APIs.

### Two Ways to Handle Forms

React provides two approaches for managing form data:

### 1. Controlled Components

In controlled components, **React manages the form state** using `useState`. The input value is controlled by React state.

#### Key Features

- State management is **easy and predictable**
- Uses events like `onChange`, `onSubmit`, `onInput`
- Data flows from state to input and back

#### Example: Controlled Input

```jsx
import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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

#### How It Works

1. `name` state holds the current input value
2. `onChange` updates the state every time user types
3. `value={name}` ensures input always reflects the state
4. `onSubmit` handles form submission

### 2. Uncontrolled Components

In uncontrolled components, the **DOM manages the form state** directly. We access values using `useRef()`.

#### Key Features

- State is managed by the **DOM**, not React
- Use `useRef()` to access input values
- Simpler but less predictable

#### Example: Uncontrolled Input

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

#### How It Works

1. `nameRef` creates a reference to the input element
2. `ref={nameRef}` connects the reference to the input
3. On submit, `nameRef.current.value` gets the current value directly from DOM

### Controlled vs Uncontrolled: Comparison

| Feature              | Controlled               | Uncontrolled          |
| -------------------- | ------------------------ | --------------------- |
| **State Management** | React manages state      | DOM manages state     |
| **Value Access**     | Via `useState`           | Via `useRef`          |
| **Validation**       | Easy to implement        | Harder to implement   |
| **Dynamic Input**    | Ideal for dynamic inputs | Good for simple forms |
| **Code Complexity**  | Slightly more code       | Less code             |
| **Predictability**   | Highly predictable       | Less predictable      |

### Form Libraries

For complex forms, consider using:

- **React Hook Form** - Lightweight and performant
- **Formik** - Feature-rich form management
- **Zod** - Schema-based validation (works with both libraries)

```bash
# Install React Hook Form
npm install react-hook-form

# Install Formik
npm install formik

# Install Zod for validation
npm install zod
```

---

## React Routing

React **cannot** handle routing by default. To enable navigation between pages without reloading the browser, we use **React Router DOM** — the standard library for routing in React web applications.

### Why Do We Need Routing?

In traditional websites, clicking a link reloads the entire page. With React Router, we can navigate between different "pages" (components) **without full page reloads**, giving users a smooth, app-like experience.

### Step 1: Install React Router DOM

```bash
npm install react-router-dom
```

### Step 2: Wrap App with BrowserRouter

`BrowserRouter` enables routing for the entire application. Wrap your root component with it:

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

### Step 3: Define Routes

Use `<Routes>` and `<Route>` to define which component shows for which URL path:

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

**How it works:**

| URL                      | Component Displayed |
| ------------------------ | ------------------- |
| `localhost:5173/about`   | `<About />`         |
| `localhost:5173/contact` | `<Contact />`       |

### Step 4: Navigate with Link (Not Anchor Tags)

To navigate between pages **without reloading**, use `<Link>` instead of `<a>` tags:

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

### Complete Example: Simple Multi-Page App

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

### Key Points to Remember

| Concept              | Description                           |
| -------------------- | ------------------------------------- |
| `BrowserRouter`      | Wraps the app to enable routing       |
| `<Routes>`           | Container for all route definitions   |
| `<Route>`            | Maps a URL path to a component        |
| `<Link to="">`       | Navigates without reloading the page  |
| **Avoid `<a>` tags** | They cause full page reloads in React |

---

## Quick Recap

| Topic                  | One-Line Summary                                         |
| ---------------------- | -------------------------------------------------------- |
| **React**              | A JavaScript library for building user interfaces.       |
| **JSX**                | Lets us write HTML inside JavaScript.                    |
| **Component**          | A reusable and independent part of the UI.               |
| **Props**              | Pass data from parent to child (read-only).              |
| **State**              | Data that changes over time and causes re-rendering.     |
| **Virtual DOM**        | A lightweight copy of the UI used for efficient updates. |
| **API**                | A bridge between the client and the server.              |
| **useState**           | Hook for managing state in function components.          |
| **useEffect**          | Hook for side effects like API calls.                    |
| **useMemo**            | Hook for caching expensive calculations.                 |
| **useCallback**        | Hook for caching functions (stable identity).            |
| **useRef**             | Hook for DOM manipulation and storing values.            |
| **React Compiler**     | Automatically handles memoization in React 19+.          |
| **Events**             | User actions that trigger functions (camelCase in JSX).  |
| **Controlled Forms**   | React manages form state via useState.                   |
| **Uncontrolled Forms** | DOM manages form state via useRef.                       |
| **React Router**       | Enables navigation without page reloads.                 |

Happy learning with React!
