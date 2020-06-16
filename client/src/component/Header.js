import React, { Component } from "react";
// import logo from "../svg/netflix.png";
import { Link } from 'react-router-dom';
import  styled  from "styled-components";


class Header extends Component {
    render(){
        return(
            <HeaderComponent className="header-container">
                <div className="header-top">
                    {/* <Logo src={logo} /> */}
                    <Link className="signIn-btn">Edit Profile</Link>
                </div>
                {/* header Content */}
                <div className="header-content">
                <Title> Welcome Alex</Title>
                <Subtitle>Let's get Started</Subtitle>
                <Link className="regGuest-btn">Register Guest</Link>
                </div>
            </HeaderComponent>
        )
    }
}

export default Header;
//logo
const Logo = styled.img`
    width:25rem;
    height:7rem;
    position: absolute;
    top: 25%;
    left: 35%;
    transform: translate (-50%,-50%);


`;

//header Container
const HeaderComponent =styled.div`
    .signIn-btn {
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weigth:400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size:1rem;
        background: var(--main-orange);
        position: absolute;
        translate: transform(-50%,-50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-orange-hover);
        }
    }

    //header top
    .header-top{
        position: relative;
        height: 5rem;
        z-index:1
    }

    //Header Content    
    .header-content {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index:1;
    }
    //Register car
    .regGuest-btn {
        display: inline-block;
        background: var(--main-orange);
        text-transform: uppercase;
        border: none;
        outline: none;
        margin: 0 20%;
        padding: 1.5rem;
        border-radius: 0.1875rem;
        font-size: 2.2rem;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
        transition: background 0.2s ease-in;
        cursor: pointer;

    }





`;

    //Main Title
    const Title = styled.h1`
        margin:0 0 1.2rem;
        font-size: 6rem;
        font-weight:800;
        line-height: 1.1em;
    
    `;

    //subtitle
    const Subtitle = styled.h2`
        margin:0 0 1.875rem;
        font-size: 3rem;
        font-weight:400;
        line-height: 1.25em;
        text-transform: uppercase;
    
    
    `;

