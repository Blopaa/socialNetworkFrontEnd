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
      background-color: #F6F6F6;
    `

    return (
        <HomeGrid>
            <MenuSidebarMolecule/><PostsOrganism/><p>ya se hara algun dia esta parte</p>
        </HomeGrid>
    );
};

export default HomeGridOrganism;
