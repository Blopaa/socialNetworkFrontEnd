import styled from '@emotion/styled';
import React from 'react';

type ButtomStyleProps = {
    size: 'xl' | 'l';
    stetic: 'auth' | "warning"
};

interface ButtomProps extends ButtomStyleProps {
    children: string;
    type: 'button' | 'submit' | 'reset';
    onSubmit?: any;
    onClick?: any;
}

const Button = styled.button<ButtomStyleProps>`
  max-width: ${({size}) => (size === 'xl' ? '31.25rem' : '7.5rem')};
  width: calc(100% - 1.5rem);
  height: ${({size}) => (size === 'xl' ? '3rem' : '2.5rem')};
  background-color: ${({stetic}) => {
    switch (stetic) {
      case "auth":
        return "#834FE3"
      case "warning":
        return "#EE1B24"
    }
  }};
  border-radius: 10px;
  outline: none;
  border: none;
  transition: .2s all;
  cursor: pointer;
  color: #f6f6f6;
  font-weight: bold;
  font-size: 1rem;
  margin: .75rem;

  &:hover {
    background-color: ${({stetic}) => {
      switch (stetic) {
        case "auth":
          return "#6f30e2"
        case "warning":
          return "#D91E29"
      }
    }};
  }
`;

const ButtomAtom: React.FC<ButtomProps> = ({children, type, size, stetic, onSubmit, onClick}) => {
    return <Button onSubmit={onSubmit} onClick={onClick} type={type} size={size} stetic={stetic}>{children}</Button>;
};

export default ButtomAtom;
