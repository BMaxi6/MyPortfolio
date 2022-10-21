import React from 'react'
import { HorizontalBar } from '../horizontal-bar/HorizontalBar';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
        <div className="header_grid">
            <div className='header-title-container'>
                <p className="header_name">Maximiliano Brun</p>
                <HorizontalBar></HorizontalBar>
            </div>
            <div className="header_desc">
                <p className="header_career">System Enginering</p>
                <p className="header_profession">Developer</p>
            </div>
        </div>
    </header>
  )
}
