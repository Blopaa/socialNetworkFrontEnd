import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useForm from '../../../hooks/useForm';

type InputProps = {
  name: string;
};

const Input = styled.input`
  max-width: 31.25rem;
  width: 100%;
  max-height: 4.375rem;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333333;
  font-weight: bold;

  ::placeholder {
    color: rgba(51, 51, 51, 0.8);
  }
`;

const InputAtom: React.FC<InputProps> = ({ name }) => {
  const { value, handleInputChange } = useForm({
    [name]: '',
  });

  let inputValue = value[name];

  return (
    <Input
      placeholder={name}
      onChange={handleInputChange}
      name={name}
      value={inputValue}
    />
  );
};

export default InputAtom;
