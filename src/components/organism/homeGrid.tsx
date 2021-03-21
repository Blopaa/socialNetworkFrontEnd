import React from 'react';
import styled from "@emotion/styled";
import MenuSidebarMolecule from "../molecules/menuSidebar";
import {fadeIn} from "../../styles/animations";

const HomeGridOrganism = () => {

    const HomeGrid = styled.div`
      width: 100%;
      height: 100vh;
      display: grid;
      grid-template-columns: 23.375rem auto 23.375rem;
      background-color: #E5E5E5;
      animation: ${fadeIn} .5s ease;
    `

    return (
        <HomeGrid>
            <MenuSidebarMolecule/><p>blw</p><p>vlw</p>
        </HomeGrid>
    );
};

export default HomeGridOrganism;
