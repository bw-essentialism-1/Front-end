1. What problem does the context API help solve?
    `allows you to manage global state without prop drilling`


1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    `actions are where we make the API calls, they are used to send certain data to state from the API depending on the type of action`
    `reducers are where the state gets updated depending on the type of action`
    `store is a way of storing state globally to be passed around from component to component which is always why it is the single source of truth, it's state can be applied to all components`

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    `application state is global, component state is local`

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   ` thunk is a function that can be returned inside of a function, it allows us to return dynamic logic based on the function it is inside `

1. What is your favorite state management system you've learned and this sprint? Please explain why!
  `kinda liked redux despite it's bad wrap - it was a fun brain teaser and felt a sense of accomplishment when I finally logically understood it`
