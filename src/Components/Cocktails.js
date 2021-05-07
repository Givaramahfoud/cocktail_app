import React from 'react'
import '../../src/Components/style/cocktails.css';

const Cocktails = ({ title, ingredient, image }) => {
    return (
        <div className='container'>
            <h1 className='title'>{title}</h1>
            <p className='ingredient'>{ingredient}</p>
            <img className='img' src={image} alt='' />
        </div>
    )
}


export default Cocktails