import React, { useState, useEffect } from 'react'
import './Footer.css'

export default function Footer() {
    const [showAboutUs, setShowAboutUs] = useState(false)

    const toggleAboutUsDropdown = () => {
        setShowAboutUs(true)
    }

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
                <div id='about-us-dropdown' onClick={setShowAboutUs}>About Us</div><i class="fa-solid fa-angle-down"></i>
                {showAboutUs && (
                    <ul id='about-us-list'>
                        <li className='names'>Justin Chau</li>
                        <li className='names'>David Lee</li>
                        <li className='names'>Justin Sweeney</li>
                        <li className='names'>Srdan Vorkapic</li>
                        <li className='names'>Chris Young</li>
                    </ul>
                )}
                <p>© 2022 Petstagram an Instagram Clone</p>
            </div>
        </div>
    )
}
