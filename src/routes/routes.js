import React from 'react';
import { Route, Switch } from "react-router-dom";
import asyncComponent from '../util/asycn.component';
const Videos = asyncComponent(() => import('../videos/video.container'));
const Home = asyncComponent(() => import('../home/home.component'));


export default () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/videos" exact component={Videos} />
        </Switch>
    )
}