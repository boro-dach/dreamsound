import React from 'react'

export default function SoundKit(props) {
  return (
    <div className="soundkit">
      <img src={props.imagesrc} alt="" />
      <div className="soundkit__text">
        <p className='soundkit__text__name'>{props.name}</p>
        <p className='soundkit__text__price'>от {props.price}₽</p>
        <p className='soundkit__text__author'>@{props.author}</p>       
      </div>
      <audio src={props.previewsrc} controls type="audio/mpeg"></audio>
    </div>
  )
}