import React from 'react'
import ListNode from './ListNode'
import {Col, Grid, Row} from 'react-bootstrap/lib/'

const CurrentOctionList = ({currentItems}) => {

    let currentItem = currentItems.map((record) => {

            return (
                <ListNode record={record} />
            )
        }
    )
    return (
        <Grid className="current-octions-grid">{currentItem}</Grid>
    )
}

export default CurrentOctionList