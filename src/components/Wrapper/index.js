import React from 'react';
import styled from '@emotion/native';

const WrapperView = styled.View`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  padding: ${props => props.padding};
`;

const Wrapper = ({children, padding}) => {
  return <WrapperView padding={padding}>{children}</WrapperView>;
};

export default Wrapper;
