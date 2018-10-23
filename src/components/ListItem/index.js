import React from 'react';
import './style.css';

import logo from '../../images/tajweed.png';

export default ({item, detailsClick}) => (
    <div className="item">
        <div className="row">
            <div className="box">
                <div className="img-box">
                    <img src={logo} />
                </div>
                <div className="info-box">
                    <div className="title">
                        <a href="#" onClick={() => detailsClick(item,true)}>{item.name}</a>
                    </div>
                </div>
                <div className="button-box">
                    <button className="audio"/>
                </div>
                <div className="button-box">
                    <button className="details" onClick={() => detailsClick(item,false)}/>
                </div>
            </div>
        </div>
    </div>
)