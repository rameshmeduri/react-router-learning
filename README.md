* __React Router__
    * A component that allows us to map a url path to a component
    * Within the Router we declare the routes to be rendered
    * Each route has a path property and a component property that allows us to map a path to a component
    * The router is powerful and enables routes to have different children and makes active link states, et cetera extremely easy


# React Router v4
React Router is a component based routing mechanism for React apps


## react-router-dom
It’s very simple to use. We used the following components present in the react-router-dom module:
* BrowserRouter as Router - is the component between which all the routes are nested. Our most parent component.  
* Route - the component that helps specify views for each component, has many small nuances one needs to be aware of  
* Link - just a link with prop to.  
* NavLink - has activeClassName prop, to apply a css class when active
* Switch - used to make sure only one of the Routes is active at any moment (useful for showing a route without a path for paths that are not handled aka 404)
    * instead of rendering all of the routes that are active, switch is gonna let only 1 route be active at a time

__*Route*__

The main routing component which links url paths to components. We used the following props that Route accepts:
* path - prop takes string for the url path at which component should be active in the view
    * Note: if a route has path=‘/first’, it’s component will be active for all paths that start with /first
    * to avoid the above, we need to prepend prop path with keyword exact 
* component - takes a javascript expression referring to the component that one wants to link to the path
* render - this prop is useful when you don’t want to link the route to a component, but instead specify the JSX right there. This prop takes a value of a function that returns the JSX you wish this route to return. This is used mostly for the 404 pages I’m assuming, in a route that’s the last child of the switch component (and has no path prop value obviously).
* exact prop makes sure the route is rendered/active only when the path matches exactly and not just partly

__*Link*__

This component is the basic anchor tag in react, except obviously it knows what component it originates in.
* to - prop takes the path to route to when the user clicks the link

__*NavLink*__

Composed of the component Link, except with additional functionality to make Links active when their path matches the current path.
* `activeClassName` - is the class that is applied to the NavLink component when the current path matches with the link’s path
* `exact` - this prop makes sure the activeClassName is applied only when the path has an exact match with the link’s path (not just partly, similar to the exact prop in routes)

`BrowserRouter` and `Switch` don’t have much more than what’s outlined in the brief points above.    