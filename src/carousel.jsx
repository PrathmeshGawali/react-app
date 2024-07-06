import React from 'react'

export default function carousel(props) {
  return (
    <div className='c_card'>
    <img src={props.url} alt='' />
    <h2>{props.name}</h2>
    <p className='rating'>
    <p>Rating : {props.rating}</p>
    </p>
    <p>
      <a href={props.linkurl} target='_blank' rel='noopener noreferrer'>
      <button className='c_button' >See Details</button>
      </a>
    </p>
    <p>
    <a href = "Session">
      <button className='c_button'>Book now</button>
    </a>
    </p>
  </div>
  )
}
