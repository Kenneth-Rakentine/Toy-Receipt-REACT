import React from 'react'



function Invoice(props){
  return (
    <div className='folio'>
        <p className="titleTxt">Per Scholas Toys®</p>
        <h1>Customer: {props.folio.person}</h1>
        <h1>Product: {props.folio.toy.name}</h1>
        <h1>Color: {props.folio.toy.type}</h1>
        <h1>Price: ${props.folio.toy.cost}.00</h1>
        <ul>
            <h2>Features:</h2>
    {props.folio.toy.features.map((features)=>{
        return(<li className='listedFeat'>{features}</li>)
    })}
        </ul>
        <h3 className="dated">{props.folio.toy.date}</h3>
    </div>
  )
}



export default Invoice