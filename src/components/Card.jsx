import React from 'react';
import styled from 'styled-components';

import StyledCard from './Card.style';

const StyledCardImage = styled.div`
  background-image: url('src/assets/illustration-hero.svg');
  height: 200px;
  width: 100%;
`;

const Card = () => {
  return (
    <StyledCard>
      <StyledCardImage />
      <h1>Test</h1>
    </StyledCard>
  );
};

export default Card;
