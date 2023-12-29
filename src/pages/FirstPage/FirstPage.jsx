import { Container, Title, StyledImage } from './FirstPage.styled';
import example from '../../assets/example.png';
import React from 'react';
import CreatableSelect from 'react-select/creatable';
import {Sel} from './Sel';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]



const FirstPage = () => {
  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
      <Sel />
    </Container>
  );
};

export default FirstPage;
