import React, { Component } from "react";
import { Link } from 'react-router-dom';
import  styled  from "styled-components";
import Table from '../../src/component/Parked/Parked'
import Favs from '../../src/component/Parked/Favorite'


class Header extends Component {
    render(){
        return(
            <HeaderComponent className="header-container">
                <div className="header-top">
              
                    <Link className="signIn-btn">Edit Profile</Link>
                </div>
                {/* header Content */}
                <div className="header-content">
                <Title> Welcome Nick</Title>
                <Subtitle>Let's get Started</Subtitle>
                <div>
                <Link style={{display:"inline"}} to ="/register" className="regGuest-btn">Register Guest</Link>
                <Link style={{display:"inline"}} to ="/lot" className="regGuest-btn green">Reserve Spot</Link>
                </div>
                <div>
                <TableHolder className="table-content">
                <Table style={{display:"inline"}} className="Parked" />
                </TableHolder>
                <Favoriteholder className="fav-content">
                <Favs style={{display:"inline"}} className="Favs" />
                </Favoriteholder>
                </div>
                </div>
            </HeaderComponent>
        )
    }
}

export default Header;


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
        color:#fff;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-orange-hover);
            color:#fff;
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
        width: 100%;
        position: relative;
        margin: 4.5rem auto 0;


        align-content: center;
        text-align: center;
       
        z-index:1;
    }
    //Register car
    .regGuest-btn {
        display: inline-block;
        background: var(--main-orange);
        text-transform: uppercase;
        border: none;
        outline: none;
        margin: 2%;
        padding: 1.5rem;
        border-radius: 0.1875rem;
        font-size: 2.2rem;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
        color:#fff;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-orange-hover);
            color:#fff;
        }
        cursor: pointer;
       

    }
    

    .green{
        background: var(--main-green);
        margin: 2%;
        &:hover {
            background: var(--main-green-hover);
            color:#fff;
        }
    }




`;

    //Main Title
    const Title = styled.h1`
        margin:0 0 1.2rem;
        font-size: 6rem;
        font-weight:800;
        line-height: 1.1em;
        color:#fff;
    
    `;

    //subtitle
    const Subtitle = styled.h2`
        margin:0 0 1.875rem;
        font-size: 3rem;
        font-weight:400;
        line-height: 1.25em;
        text-transform: uppercase;
        color:#fff;
    
    
    `;

    //Table 
    const TableHolder = styled.div`
    display: inline-block;
    width: 35%;
    position: relative;
    margin:  4.5rem auto 0;
    text-align:left;
    padding: .3rem;
    margin: 2%;
    `;
     //Table 
     const Favoriteholder = styled.div`
     display: inline-block;
     width: 35%;
     position: relative;
     margin:  4.5rem auto 0;
     text-align:left;
     padding: .3rem;
     `;