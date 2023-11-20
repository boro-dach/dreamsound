import React from 'react'

export default function Beat(props) {
  return (
    <div className="beat">
      <img src={props.imagesrc} alt="" />
      <div className="beat__text">
        <p className='beat__text__name'>{props.name}</p>
        <p className='beat__text__price'>от {props.price}₽</p>
        <p className='beat__text__author'>@{props.author}</p>
      </div>
      
    </div>
  )
}