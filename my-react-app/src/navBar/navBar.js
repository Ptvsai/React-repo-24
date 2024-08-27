import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import logo from '../assets/images/my-logo.png'

const NavBar = () => {

    const [modalAction, setModalAction] = useState(false)

    const navigate = useNavigate();

    const handleLogoClick = (e) =>{
        e && e.preventDefault();
        navigate('/')
    }

    const openModal = (e) => {
        e && e.preventDefault();
        setModalAction(true)
    }

    const closeModal = (e) => {
        e && e.preventDefault();
        setModalAction(false)
    }

    const navigateToSignIn = (e) => {
        e && e.preventDefault();
        setModalAction(false)
        navigate('/login')
    }


    return (
        <nav className="navbar">
            <div className="logo" onClick={(e) => handleLogoClick(e)}><img src={logo} alt="website logo" /></div>
            <div className="mobile-nav">
                <button className="hamburger-icon" onClick={(e) => openModal(e)}><i className="fa-solid fa-bars"></i></button>
                <div className={`mobile-nav-list ${modalAction ? 'open' : ''}`}>
                    <div className="modal-header" onClick={(e) => closeModal(e)}>
                        <span>Back</span>
                    </div >
                    <ul className="modal-body">
                        <li onClick={(e) => navigateToSignIn(e)}>signIn / signUp</li>
                        <li>Help desk?</li>
                    </ul >
                </div >
            </div >
            <ul className="nav-list">
                <li>sign in/sign up</li>
                <li>Help desk?</li>
            </ul>
        </nav >

    )
}

export default NavBar