import React from 'react';
import styled from '@emotion/native';

const ButtonEl = styled.Button`
  font-size: 2em;
`;

const Button = ({title, onAction}) => {
  return <ButtonEl title={title} onPress={onAction} />;
};

export default Button;
