import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";

export default function Item(props) 
{
  return (
    <Slide triggerOnce>
      <div className='item'>
        <Link to={`/product/${props.id}`} ><img src={props.image} onClick={window.scrollTo(0,0)} alt="" /></Link>
          <p>{props.name}</p>
          <div className='item-prices'>
              <div className='item-price-new'>
                  ${props.new_price}
              </div>
              <div className='item-price-old'>
                  ${props.old_price}
              </div>
          </div>
      </div>
    </Slide>
  )
}
