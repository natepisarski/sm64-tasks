import React from 'react';
export const RuleList = ({children}) => {
    let wrappedChildren = [];
    let index = 0;
    
    for(const child of children) {
        index++;
        wrappedChildren.push(<li key={index}>{child}</li>);
    }
    return <ul className={'list-disc'}>
        {wrappedChildren}
    </ul>
}
