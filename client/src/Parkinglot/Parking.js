import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import "../css/mainpage.css"


function Parkinglot() {
    const imageOne = '/assets/pic1.JPG'
    const imageTwo = '/assets/pic3.JPG'

    return (
    <div className="reservespot">
    <div className="container">
         <Navbar/>
    <div class="card-header">
        Parking Avaliable
    </div>
       
        <br></br>
        <div className="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <img className="image1" src={imageOne} alt="" />
                </div>
                <div class="col-md-6">
                    <h2>24/28 Avaliable Parking</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <img className="image3" src={imageTwo} alt="" />
                </div>
                </div>

                <div className="card">
                <div class="col-md-6">
                    <dl>
                        <dt>Green</dt>
                        <dd>- Area Guess Parking</dd>
                        <dt>Red</dt>
                        <dd>- Area Resdential Parking</dd>
                    </dl>
                    <h2>Parking Rules</h2>
                    <dl>
                        <dd>- Must Register Tag </dd>
                        <dd>- Head In Parking Only</dd>
                        <dd>- No More 24hr </dd>
                    </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


    
    )
}
export default Parkinglot;