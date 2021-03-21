import React, {useContext} from 'react';
import styled from "@emotion/styled";
import {Link} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {AuthContext} from "../../contexts/authContext";

const MenuSideBar = styled.div`
      display: flex;
      justify-content: center;
      
      ul{
        padding: 0;
        margin: 0;
      }
      color:  #333333;

      li {
        display: flex;
        align-items: center;
        justify-content: left;
        margin: 4.5rem 0;
        list-style: none;
        font-weight: bold;
        font-size: 1.5rem;
        cursor: pointer;
        width: 100%;
        transition: .1s;
        
        &:hover{
          transform: scale(1.2,1.2);
        }
        a{
          text-decoration: none;
          color: inherit;
          display: inherit;
          align-items: inherit;
          justify-content: inherit;
        }
        p{
          margin: 0;
          padding-left: .5rem;
        }
      }
    ;
    `

const MenuSidebarMolecule = () => {

    const {state, dispatch} =  useContext(AuthContext)

    return (
        <MenuSideBar>
            <ul>
                <li><Link to="/home"><AiOutlineHome/><p>Home</p></Link></li>
                <li><Link to="/user"><CgProfile/><p>Profile</p></Link></li>
                <li onClick={() => dispatch && dispatch({type: "LOG_OUT"})}><FiLogOut/><p>Log out</p></li>
            </ul>
        </MenuSideBar>
    );
};

export default MenuSidebarMolecule;
