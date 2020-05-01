import React from 'react'

function ProductRow (props) {
    return(
        props.list.map((item,index)=>
            <p key={index} className="commodity-list">
                <span>{item.name}</span>
                <span>{item.price}</span>
            </p>
        )
    )
}

export default ProductRow