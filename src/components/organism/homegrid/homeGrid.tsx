import React from 'react';
import styled from "@emotion/styled";
import MenuSidebarMolecule from "../../molecules/menuSidebar";
import {fadeIn} from "../../../styles/animations";
import PostCreatorMolecule from "../../molecules/postCreator";
import PostsOrganism from "../posts";

const HomeGridOrganism = () => {

    const HomeGrid = styled.div`
      width: 100%;
      height: 100vh;
      display: grid;
      z-index: 1;
      grid-template-columns: 23.375rem auto 23.375rem;
      grid-template-areas: "menu posts users";
      background-color: #e8eff5;
    `

    const Soon = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        transition: .3s all;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 7px 7px 15px #bbcfda, -4px -4px 13px #fff,
        inset 4px 4px 8px rgba(209, 217, 230, 0.2),
          inset -8px -8px 8px rgba(255, 255, 255, 0.2);
        &:hover{
          box-shadow: 4px 2px 18px #bbcfda, -4px -4px 13px #fff,
          inset 6px 6px 16px rgba(209, 217, 230, 0.8),
            inset -8px -8px 8px rgba(255, 255, 255, 0.2);
          transform: translateY(2px);
        }
      }
    `

    return (
        <HomeGrid>
            <MenuSidebarMolecule/><PostsOrganism/><Soon><p>Soon...</p></Soon>
        </HomeGrid>
    );
};

export default HomeGridOrganism;
