import React, { useState, useEffect } from 'react'
import './Footer.css'

export default function Footer() {
    const [showAboutUs, setShowAboutUs] = useState(false)

    useEffect(() => {
        if (!showAboutUs) return
        const closeDropdown = (e) => {
            setShowAboutUs(false);
        }

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener('click', closeDropdown);
    }, [showAboutUs]);

    return (
        <div id='footer'>
            <ul id='tech-stack'>
                <li className='list-item'>JavaScript</li>
                <li className='list-item'>Python</li>
                <li className='list-item'>React</li>
                <li className='list-item'>Flask</li>
                <li className='list-item'>SQLAlchemy</li>
                <li className='list-item'>Redux</li>
                <li className='list-item'>Git</li>
                <li className='list-item'>Docker</li>
                <li className='list-item'>Postgres</li>
                <li className='list-item'>AWS</li>
            </ul>
            <div id='footer-bottom'>
                <div id='about-us-dropdown' onClick={setShowAboutUs}>About Us<i className="fa-solid fa-angle-down down-caret"></i></div>
                {showAboutUs && (
                    <ul id='about-us-list'>
                        <li className='names'><a href='https://github.com/jchau-623' target='_blank' rel="noopener noreferrer">Justin Chau</a></li>
                        <li className='names'><a href='https://github.com/davigravi' target='_blank' rel="noopener noreferrer">David Lee</a></li>
                        <li className='names'><a href='https://github.com/jstnswn' target='_blank' rel="noopener noreferrer">Justin Sweeney</a></li>
                        <li className='names'><a href='https://github.com/srvorkap' target='_blank' rel="noopener noreferrer">Srdan Vorkapic</a></li>
                        <li className='names'><a href='https://github.com/Noslepr' target='_blank' rel="noopener noreferrer">Chris Young</a></li>
                    </ul>
                )}
                <p>© 2022 Petstagram an Instagram Clone</p>
            </div>
        </div>
    )
}
