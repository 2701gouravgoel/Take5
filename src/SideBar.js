import './SideBar.css';
import React, { useState } from 'react'

export default function SideBar() {
    return <>
        <div className='sidenav1'>
            <img  src={require('./images/logo.png')}/>
            <div className='buttonContainer' >
                <span>
                    <i className="fas fa-comments fa-lg"></i>
                    <img src={require('./icons/home.png')} />
                    <span style={{ marginLeft: '13px' }}>Home </span>
                </span>
            </div>
            <div className='buttonContainer' >
                <span>
                    <i className="fas fa-comments fa-lg"></i>
                    <img src={require('./icons/liveClasses.png')} />
                    <span style={{ marginLeft: '13px' }}>Live Classes </span>
                </span>
            </div>
            <div className='buttonContainer' >
                <span>
                    <i className="fas fa-comments fa-lg"></i>
                    <img src={require('./icons/booked.png')} />
                    <span style={{ marginLeft: '13px' }}>Booked </span>
                </span>
            </div>
            <div className='buttonContainer' >
                <span>
                    <i className="fas fa-comments fa-lg"></i>
                    <img src={require('./icons/profile.png')} />
                    <span style={{ marginLeft: '13px' }}>Profile </span>
                </span>
            </div>
            <div className='buttonContainer' >
                <span>
                    <i className="fas fa-comments fa-lg"></i>
                    <img src={require('./icons/messages.png')} />
                    <span style={{ marginLeft: '13px' }}>Messages </span>
                </span>
            </div>
        </div>
    </>
}