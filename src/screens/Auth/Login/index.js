import React from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';

const Container = styled.View`
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  background-color: ${props => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <Container>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id
        quasi ea dolores alias! Nemo inventore amet veniam voluptatem repellat
        id unde. Perferendis vero itaque officiis iusto amet natus ex.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas id
        quasi ea dolores alias! Nemo inventore amet veniam voluptatem repellat
        id unde. Perferendis vero itaque officiis iusto amet natus ex.
      </Text>
    </Container>
  );
};

export default Login;
