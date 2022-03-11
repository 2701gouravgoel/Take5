import './SideBar.css';
import React, { useState } from 'react'

export default function SideBar() {
    return <>
        <div id="mySidenav" className='sidenav'>
            home
            <div style={{ marginLeft: '35px' }} className="d-flex  align-items-center mt-3 mb-3 " >
                <span style={{ fontWeight: 'bold', fontSize: '18px', marginLeft: '10px' }}>
                    {/* <NextImage src={'/travel_talk2.png'} height={35} width={150} /> */}
                </span>
            </div>

            <div
                className='buttonContainer' >
                <span>
                    <i className="fas fa-comments fa-lg"></i>
                    <span style={{ marginLeft: '13px' }}> トーク </span>
                </span>
            </div>
                <>
                    <div
                        className='buttonContainer' >
                        <span>
                            <i className="fas fa-users fa-lg"></i>
                            <span style={{ marginLeft: '15px' }}>顧客一覧</span>
                        </span>

                    </div>

                    <div
                        className='buttonContainer' >
                        <span>
                            <i className="far fa-building fa-lg"></i>
                            <span style={{ marginLeft: '23px' }}>店舗一覧</span>
                        </span>

                    </div>

                    <div
                        className='buttonContainer' >
                        <i className="fas fa-cog fa-lg"></i>
                        <span style={{ marginLeft: '20px' }}>設定</span>
                    </div>
                </>
        </div>
    </>
}