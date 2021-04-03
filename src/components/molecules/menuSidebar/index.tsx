import React, {useContext, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import {Link, useHistory} from 'react-router-dom'
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {AuthContext} from "../../../contexts/authContext";
import {hoverMenu} from "../../../styles/animations";
import {profile} from "../../../../types/generic";

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
        justify-content: center;
        margin: 4.5rem 0;
        list-style: none;
        font-weight: bold;
        font-size: 1.5rem;
        cursor: pointer;
        width: 100%;
        transition: .1s;
        background-color: #e8eff5;
        box-shadow: 7px 7px 15px #bbcfda, -4px -4px 13px #fff,
        inset 4px 4px 8px rgba(209, 217, 230, 0.2),
          inset -8px -8px 8px rgba(255, 255, 255, 0.2);
        padding: 1rem;
        border-radius: 1rem;
        
        &:hover{
          box-shadow: 4px 2px 18px #bbcfda, -4px -4px 13px #fff,
          inset 6px 6px 16px rgba(209, 217, 230, 0.8),
            inset -8px -8px 8px rgba(255, 255, 255, 0.2);
          transform: translateY(2px);
        }
        
        a{
          width: 100%;
          height: 100%;
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

    const [profile, setProfile] = useState<profile | {}>({});

    const history = useHistory();
    const {authState, authDispatch} =  useContext(AuthContext)

    useEffect(() => {
        authState?.profile?.then(d => setProfile(d));
    }, [])

    const handleChageRoute = (url: string) => {
        history.push(url)
    }

    return (
        <MenuSideBar>
            <ul>
                <li onClick={() => handleChageRoute("/home")}><AiOutlineHome/><p>Home</p></li>
                <li onClick={() => handleChageRoute(`/${(profile as profile).nickname}`)}><CgProfile/><p>Profile</p></li>
                <li onClick={() => handleChageRoute("/search")}><AiOutlineSearch/><p>Search</p></li>
                <li onClick={() => authDispatch && authDispatch({type: "LOG_OUT"})}><FiLogOut/><p>Log out</p></li>
            </ul>
        </MenuSideBar>
    );
};

export default MenuSidebarMolecule;
