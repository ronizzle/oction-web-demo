import React from 'react'
import {Image, Button, Col, Row, Jumbotron} from 'react-bootstrap/lib/'
import DeadlineTimer from './DeadlineTimer.js'



const ListNode = ({record}) => {

    let img = "/resources/images/" + record.id + ".jpg"

    return (
        <Jumbotron>
            <Image src={img} circle />
            <h2>{record.name}</h2>
            <p>{record.description}</p>
            <DeadlineTimer  deadline={record.deadline} />
            <p className="retail-price-p">
                <small>
                    Retail Price: {record.retail_price}
                </small>
            </p>
            <p><Button bsStyle="success" bsSize="large">{record.auction_price} &rarr;</Button></p>
        </Jumbotron>
    )
}

export default ListNode