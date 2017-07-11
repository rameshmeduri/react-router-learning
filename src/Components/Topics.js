import React from 'react';
import { Route, NavLink } from 'react-router-dom';

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
);

const SelectSomething = () => <h3>Please Select a Topic</h3>;

const Topics = ({ match }) => {
    return (
        <div className="container">
            <h2>Topics</h2>
            <div className="list-group">
                <NavLink activeClassName='active' className="list-group-item" to={`${match.url}/topic1`}>Topic1</NavLink>
                <NavLink activeClassName='active' className="list-group-item" to={`${match.url}/topic2`}>Topic2</NavLink>
                <NavLink activeClassName='active' className="list-group-item" to={`${match.url}/topic3`}>Topic3</NavLink>
            </div>

            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route exact path={match.url} component={SelectSomething} />
        </div>
    );
};

export default Topics;
