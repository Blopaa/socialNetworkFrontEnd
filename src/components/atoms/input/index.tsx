import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import useForm from '../../../hooks/useForm';

type InputProps = {
  name: string;
  sendValue: React.Dispatch<React.SetStateAction<{}>>;
  lastFormValue: {};
  formType: string;
};

const Input = styled.input`
  height: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #333333;
  font-weight: bold;
  margin: 0.75rem;
  padding: 1rem;
  max-width: calc(31.25rem - 2rem);
  width: calc(100% - 3.5rem);

  ::placeholder {
    color: rgba(51, 51, 51, 0.8);
  }
`;

const InputAtom: React.FC<InputProps> = ({
  name,
  sendValue,
  lastFormValue,
  formType,
}) => {
  const { value, handleInputChange } = useForm({
    [name]: '',
  });

  let inputValue = value[name];

  useEffect(() => {
    sendValue({
      ...lastFormValue,
      [name]: inputValue,
    });
  }, [inputValue]);

  return (
    <Input
      placeholder={name}
      onChange={handleInputChange}
      name={name}
      value={inputValue}
      type={formType}
    />
  );
};

export default InputAtom;
