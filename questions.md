
1. PureComponent implements shouldComponentUpdate method with a shallow prop and state comparison and Component does not. This can prevent unnecessary re-renders if the props and state of the component have not changed.

#

2. The unidirectional data flow in React allows use to use context to pass data through the component tree without passing props at each level. Maybe it is possible that shouldComponentUpdate can lead to refresh issues, as the context change might not trigger a re-render.

#

3. Tree (03) ways to pass data from a component to its parent:

- `Context`: the child component can update a value in the context and then the parent component loads the value from the context.
- `Callback functions`: The child component takes a callback function as props from its parent (the callback function should have at least one argument), then when the child component calls the functionn, he passes the argument value which will be used in its parent.
- `Refs`: We can pass data from compent to its parents using refs.

#

4. Two (02) ways to prevent from re-rendering:

- Use the `useMemo` hook to avoid recomputing expensive calculations unless its dependencies has changed.
- Use `useRef` instead of `useState` for values that the changement is not supposed to trigger a re-render.

#

5. A `Fragment` is used in React to render multiple elements without a wrapper. It might break the app if you want to pass props other than `key`.

#

6. Three examples of the HOC pattern are:

- withLoading/withData: a component that wraps another component and fetches data for it.
- withTheme: a component that wraps another component and provides theme information to it.
- withAuth: a component that wraps another component and provides authentication information to it.

#

7. In Javascript, we use Promises, callbacks, async...await to handle asynchronous tasks. To handle execption with `Promises` we use the `.catch()` method on the promise, while with `async...await` we use `try...catch`. To handle expection with `callbacks`, we need to pass an error argument.

#

8. The `setState` method takes `two arguments`. The first is the new value of the state and the second is an optional callback function. When we call setState, React creates a pending task meaning that if we call the state just after setState, it's possible to get the old value, that's why the callback function is `async`.

#

9. To migrate form `class component` to `function component`:

- First Replace class keyword and the **extends from React.component** by:

  ```js
    const YourComponentName = () =>
  ```

- Remove the properties in the constructor by state variables using `useState`
- Replace lifecycle methods by the `useEffect` hook
- Remove the `render` function
- Export the component as a function

#

10. There are several ways to use styles in a React component:

- Create a style file and then import it in the component file
- Inline style: We can pass a style object as props
- Using theme: with a theme configuration we can apply styles to components
- Any 3rd party library like tailwind CSS


#

11. To render html content from HTML, there is many ways but I prefer using `useRef`

```js
// in the case of using a div to display
const myContainerRef = useRef<HTMLDivElement>(null);

// when the content is ready (case of fetching from an api)
// can be called in useEffect or another place when the data is ready
if (myContainerRef.current) {
  myContainerRef.current.innerHTML = myData ?? "";
}
```
