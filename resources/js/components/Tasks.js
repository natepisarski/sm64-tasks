import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TaskIndex} from "./pages/tasks/TaskIndex";
import {SiteHeader} from "./pages/website/SiteHeader";
import {Redirect} from "react-router";
import {SeasonIndex} from "./pages/seasons/SeasonIndex";
import {PlayerIndex} from "./pages/players/PlayerIndex";
import {TaskResults} from "./pages/admin/creator/TaskResults";
import {TaskCreator} from "./pages/admin/creator/TaskCreator";

/**
 * This is the EntryPoint for the React app. From here we just set up the router. The individual pages each control
 * their API calls, state, functionality, etc.
 * @returns {JSX.Element}
 * @constructor
 */
export const Tasks = ({}) => {
    return <BrowserRouter>
        <SiteHeader/>
        <div className={'p-5'}>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <Redirect to={'/tasks'} />}
                />
                <Route path={'/tasks/:taskId'} children={<TaskIndex/>}/>
                <Route path={'/tasks/:taskId/results'} children={<TaskResults />} />
                <Route path={'/tasks'} children={<TaskIndex/>}/>

                <Route path={'/seasons/:seasonId'} children={<SeasonIndex/>} />
                <Route path={'/seasons'} children={<SeasonIndex/>} />

                <Route path={'/players/:playerId'} children={<PlayerIndex />} />
                <Route path={'/players'} children={<PlayerIndex />} />

                <Route path={'/creator'} children={<TaskCreator />} />
            </Switch>
        </div>
    </BrowserRouter>
};
