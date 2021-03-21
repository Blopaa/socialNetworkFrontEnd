import React from 'react';
import styled from "@emotion/styled";
import MenuSidebarMolecule from "../molecules/menuSidebar";
import {fadeIn} from "../../styles/animations";
import PostCreatorMolecule from "../molecules/postCreator";

const HomeGridOrganism = () => {

    const HomeGrid = styled.div`
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-columns: 23.375rem auto 23.375rem;
      background-color: #F6F6F6;
    `

    return (
        <HomeGrid>
            <MenuSidebarMolecule/><PostCreatorMolecule/><p>vlw</p>
        </HomeGrid>
    );
};

export default HomeGridOrganism;
