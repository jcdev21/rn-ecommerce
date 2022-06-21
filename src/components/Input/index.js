import React from 'react';
import styled from '@emotion/native';
import {useController} from 'react-hook-form';

const InputField = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 2px solid black;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
`;

const Input = ({name, control, rules, placeholder, secure = false}) => {
  const {field} = useController({
    name,
    control,
    rules,
    defaultValue: '',
  });
  return (
    <InputField
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
      secureTextEntry={secure}
    />
  );
};

export default Input;
