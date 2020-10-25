import React from 'react'


export const Gate = ({cond}) => {
    if ( cond === true  ) {
        return <div>Gate is Open</div>
    } else 
    {
        return <div>Gate is Closed</div>
    }
}
