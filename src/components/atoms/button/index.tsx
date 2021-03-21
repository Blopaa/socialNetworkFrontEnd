import styled from '@emotion/styled';
import React from 'react';

type ButtomStyleProps = {
  size: 'xl' | 'l';
  stetic: 'auth'
};
interface ButtomProps extends ButtomStyleProps {
  children: string;
  type: 'button' | 'submit' | 'reset';
  onSubmit?: any
}

const Button = styled.button<ButtomStyleProps>`
  max-width: ${({ size }) => (size === 'xl' ? '31.25rem' : '7.5rem')};
  width: calc(100% - 1.5rem);
  height: ${({ size }) => (size === 'xl' ? '3rem' : '2.5rem')};
  background-color: ${({stetic}) => stetic === 'auth' &&"#834FE3"};
  border-radius: 10px;
  outline: none;
  border: none;
  transition: .2s all;
  cursor: pointer;
  color: #f6f6f6;
  font-weight: bold;
  font-size: 1rem;
  margin: .75rem;
    &:hover{
        background-color: ${({stetic}) => stetic === 'auth' &&"#6f30e2"};
    }
`;

const ButtomAtom: React.FC<ButtomProps> = ({ children, type, size, stetic, onSubmit }) => {
  return <Button onSubmit={onSubmit} type={type} size={size} stetic={stetic}>{children}</Button>;
};

export default ButtomAtom;
