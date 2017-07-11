

### npm install --save `react-router-dom`
```
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
```

### `<BrowserRouter>`
```
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
```

### `<Route>`
```
<Route path='/page' component={Page} />
```


### `<Link>`
```
<Link to="/about">About</Link>
```

### `<NavLink>`
```
<NavLink to="/faq" activeClassName="selected">FAQs</NavLink>
```

### `<Switch>`
```
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={About}/>
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
```
