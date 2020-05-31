## Questions

### What is the difference between Component and PureComponent? give an example where it might break my app.
```
  PureComponent has predefined shouldComponentUpdate method which is used for comparison props and
  state before every render. It increases performance in most of the cases but you should remember that comparison is shallow and every
  mutation can produce a bug.
```  
### Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
```
Context is a global rare changeable thing maybe in some cases it will block the re-render within descendants.
```

### Describe 3 ways to pass information from a component to its PARENT.
```
First is passing a function to the child and invoke there with the information.
Second is using the Context API
Last is using some state managers like redux/mobix
```

### Give 2 ways to prevent components from re-rendering.
```
shouldComponentUpdate/PureComponent and maybe checking it manually within a component
```

### What is a fragment and why do we need it? Give an example where it might break my app.
```
Basically React.Fragment/<> it's just a wrapper like a <div> but it doesn't appear in output html. So sometimes it might brake your styles.
```

### Give 3 examples of the HOC pattern.
```
HOC it's just like HOF(Higher Order Function) but receives a component as a parameter.

Something like this:

const withProps = injectedProps => WrappedComponent => {
  const WithProps = (props) => <WrappedComponent {...injectedProps} {...props} />;

  return WithProps;
};

WithProps({
  foo: 1,
  bar: 2
  })(SomeComponent)

```

### what's the difference in handling exceptions in promises, callbacks and async...await.
```
for async...await we should use try/catch operator

try {
  some code
} catch(err) {
  send to error handler
}

for callbacks something like this:

send(data, callback(err, data) => if(err) send to error handler)

for promises we can do like this:

send.catch(e => send to error handler)

```

### How many arguments does setState take and why is it async.
```
It can take two arguments setState({...data}, () => 'invoked after updated new state'). Maybe it's async due to the performance problems.
```

### List the steps needed to migrate a Class to Function Component.

```
'props' come from parameter
'setState' should be created by 'useState' hook.
All life circles should be changed due the 'useEffect' hook.
No need for render method just return plain jsx from function.
ref is creating by 'createRef' hook.
```

### List a few ways styles can be used with components
```
Global styles (just import css to the component)
Modules, (import css as an object and pass keys to 'className' attribute)
css in js (pass css in js to 'style' attribute)
and there is one more styled-components, i didn't use that but it looks fancy
```

### How to render an HTML string coming from the server.
```
We can use ReactDOM.hydrate method for rendering prepared by ReactDOMServer strings aka server-side rendering
```
