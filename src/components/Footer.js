import React from 'react'

const Footer = ({children,total}) => {
    return (
        <div>
            {children}
           <h3>{total}</h3>
        </div>
    )
}

export default Footer

Footer.defaultProps={
    total:"800£"
}