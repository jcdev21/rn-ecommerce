import React from 'react';
import styled from '@emotion/native';
import {SafeAreaView, Text} from 'react-native';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.secondaryColor};
`;

const Login = () => {
  return (
    <SafeAreaView>
      <Container>
        <Text>Login</Text>
      </Container>
    </SafeAreaView>
  );
};

export default Login;
