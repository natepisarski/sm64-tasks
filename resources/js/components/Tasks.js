import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {TaskIndex} from "./TaskIndex";
import {SiteNavigation} from "./SiteNavigation";
import {SiteHeader} from "./SiteHeader";

/**
 * This is the EntryPoint for the React app. From here we just set up the router. The individual pages each control
 * their API calls, state, functionality, etc.
 * @returns {JSX.Element}
 * @constructor
 */
export const Tasks = ({}) => {
    return <BrowserRouter>
        <SiteHeader />
        <div className={'grid grid-cols-12 w-full md:gap-x-4'}>
            <div className={'grid col-span-12 md:col-span-2'}>
                <SiteNavigation/>
            </div>
            <div className={'grid col-span-1 md:col-span-10'}>
                <Switch>
                    <Route path={'/tasks/:taskId'} children={<TaskIndex/>}/>
                    <Route path={'/tasks'} children={<TaskIndex/>}/>
                </Switch>
            </div>
        </div>
    </BrowserRouter>
};
