import React from 'react'
import './App.css'
export default function slider(props){
    return(
        <div className='slider'>
            <div className='slider_a'>
            <img src={props.img} alt=' '/>
            </div>
        </div>
    )
}