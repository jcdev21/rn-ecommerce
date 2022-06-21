import React from 'react';
import styled from '@emotion/native';
import Input from '../../../components/Input';
import Wrapper from '../../../components/Wrapper';
import Button from '../../../components/Button';
import {useForm} from 'react-hook-form';
import {Text} from 'react-native';
import {rules} from './rules';

const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.secondaryColor};
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };
  console.log('Render');

  return (
    <Wrapper>
      <Container>
        <Input
          name="email"
          placeholder="Email"
          control={control}
          rules={rules.email}
        />
        {errors.email && <Text>{errors.email?.message}</Text>}
        <Input
          name="password"
          secure={true}
          placeholder="Password"
          control={control}
          rules={rules.password}
        />
        {errors.password && <Text>{errors.password?.message}</Text>}
        <Button title="Login" onAction={handleSubmit(onSubmit)} />
      </Container>
    </Wrapper>
  );
};

export default Login;
