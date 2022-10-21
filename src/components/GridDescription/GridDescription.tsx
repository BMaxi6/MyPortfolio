import React, { ReactNode } from 'react'
import './GridDescription.css';
import myImage from './../../assets/bg.png'

export interface GridDescriptionProps {
    ubication?: 'left' | 'right';
    title: string;
    description: string;
}

export const GridDescription = ({ubication="left"}: GridDescriptionProps) => {
  return (
    <div className="grid-container">
        <div className="body-grid">
            <div className='grid-item__container'>
                <img src={myImage} className="grid-image" alt='myImage'/>
            </div>
            <div className="grid-text">
                <div className="grid-item__container">
                    <h1>
                        FrontEnd Developer
                    </h1>
                    <p className='grid-item__paragraph'>
                        Heelo, my name is maxi and I am a FrontEnd Developer from Buenos Aires, Argentina.
                        I like to craft solid user experiences with innovate ideas.
                    </p>
                    <div className="tecnology-list">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
