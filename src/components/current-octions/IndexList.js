import React from 'react'
import CurrentOctionsList from './CurrentOctionsList'

const IndexList = ({currentItems}) => {
    return(
        <div>
            <CurrentOctionsList currentItems={currentItems} />
        </div>
    )
}

export default IndexList