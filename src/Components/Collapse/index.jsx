import React, { useState } from 'react'

function Collapse(props) {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className='collapse' style={isOpen ? { marginBottom: 31 } : { marginBottom: 66 }}>
            <span className='collapse-banner' onClick={() => isOpen ? setOpen(false) : setOpen(true)}><h2>{props.title}</h2><i className={`arrow-${isOpen ? 'opened' : 'closed'}`}></i></span>
            {
                isOpen && <div className='collapse-content'>{props.children}</div>
            }
        </div>
    )
}

export default Collapse;