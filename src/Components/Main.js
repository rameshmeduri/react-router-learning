import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Topics from './Topics';
import NotFound from './NotFound';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/topics' component={Topics} />
            <Route render={NotFound} />
        </Switch>
    </main>
);

export default Main;
