import React from 'react';
import ReactDOM from 'react-dom';
import {Tasks} from "./Tasks";

function Example() {
    return (
        <div className="container">
           The tasks should appear below
            <Tasks />
        </div>
    );
}

export default Example;

setTimeout( () => {
    if (document.getElementById('react-root')) {
        ReactDOM.render(<Example/>, document.getElementById('react-root'));
    }
}, 0);
