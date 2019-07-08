1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Object.filter, object.concat and object.map, I believe we use Object.concat for the example given

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions hold information to send to the Redux store
Reducers specify how the action will change the applications state
The store holds all of our application state

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Application state in Redux is application wide, where as component state only exists on a given component. A good time to use component state over application state is when the state data will only be read by that component and its children

1.  What is middleware?
Middleware is any third-party extension that can affect our data in Redux

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux thunk is an example of middleware that lets us perform AJAX operations in Redux

1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()
