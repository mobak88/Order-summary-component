import styled from 'styled-components';

export const StyledCard = styled.div`
  width: 90vw;
  max-width: 375px;
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 22px;
`;

export const StyledCardImage = styled.div`
  background-image: url('/src/assets/illustration-hero.svg');
  height: 200px;
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

export const StyledCardHeading = styled.h2`
  font-size: 22px;
  color: ${(props) => props.theme.colors.darkBlue};
  margin: 30px 0 22px 0;

  @media (min-width: 1440px) {
    font-size: 28px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme.colors.desaturatedBlue};
  text-align: center;
  width: 80%;

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const StyledCostDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.veryPaleBlue};
  width: 85%;
  margin: 22px 0;
  padding: 0 16px;
  border-radius: 5px;
`;

export const StyledPlanDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto 0 16px;
  padding: 20px 0;
`;

export const StyledPlanHeading = styled.h3`
  font-size: 14px;
  color: ${(props) => props.theme.colors.darkBlue};

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const StyledPlanParagraph = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.desaturatedBlue};

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const StyledPlanLink = styled.a`
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.brightBlue};
    text-decoration: none;
  }

  @media (min-width: 1440px) {
    font-size: 15px;
  }
`;

export const StyledCardButton = styled.button`
  background-color: ${(props) => props.theme.colors.brightBlue};
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  padding: 15px 20px;
  width: 85%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const StyledCancelLink = styled.a`
  font-size: 15px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.desaturatedBlue};
  margin-top: 22px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.darkBlue};
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;
