import React from 'react';
import ReactDOM from 'react-dom';
import {Tasks} from "./Tasks";

function ReactRoot(): JSX.Element {
    return (
        <div className="w-full">
            <Tasks />
        </div>
    );
}

export default ReactRoot;

setTimeout( () => {
    if (document.getElementById('react-root')) {
        ReactDOM.render(<ReactRoot/>, document.getElementById('react-root'));
    }
}, 0);
