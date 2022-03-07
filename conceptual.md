### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  <p>React is a popular and powerful front end framework based in JavaScript. React breaks up code into small, individual "components" which allows code to be more easily written, understood, maintained & reusable.</p>
- What is Babel?
  <p>Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser. It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings.</p>
- What is JSX?
  <p>JSX is an extension of JavaScript that is used for writing React UI components. The scripts must be transpiled into valid JS before it can be run in the browser.</p>
- How is a Component created in React?
  <p>Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.</p> 
- What are some difference between state and props?
  <p>"props"  is an object of arbitrary inputs a React function component accepts as the first argument. "state" is data that changes over the lifetime of a specific instance of a React component.</p>
- What does "downward data flow" refer to in React?
  <p>This refers to the passing down of data from parent components to its children. This includes state and prop variables.</p>
- What is a controlled component?
  <p>This is a component that takes its values from props and affects changes through callbacks. The parent component controls is by handling the callback and its own state.</p>
- What is an uncontrolled component?
  <p>Uncontrolled components are those for which the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state. The values of the form elements are traditionally controlled by and stored on the DOM</p>
- What is the purpose of the `key` prop when rendering a list of components?
  <p>Key props are used in component lists to help React identify when and which component has changed and manage them accordingly. use in map.</p>
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  <p>Using an array index is a poor choice because it can lead to unstable behavior from the component, for instance if the array is altered by reordering it or adding/removing from it, it can impact the desired performance of the component.</p>
- Describe useEffect.  What use cases is it used for in React components?
  <p>useEffect is a React hook that allows the user to run "side effects" such as calling an API, starting a timer, or manually changing the DOM.</p>
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  <p>useRef creates a mutable reference object whose value is set to whatever is passed to it. The object persists throughout the life of the parent component & does not cause a rerender of the component if the ref value is changed.</p>
- When would you use a ref? When wouldn't you use one?
  <p>A ref is used when making changes directly to a DOM element without causing a rerender, such as managing focus. You would not want to use refs when using class-based components</p>
- What is a custom hook in React? When would you want to write one?
  <p>Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated.The main reason to write a custom hook is for code reusability.</p>