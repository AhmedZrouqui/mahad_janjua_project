import React from 'react'

function DataItem({children, id, onClickHandle}) {
    return (
        <li 
        className="data-display-item"
        id={id}>
        
            <a id={id} onClick={onClickHandle}>{children}</a>
        </li>
    )
}

export default DataItem
