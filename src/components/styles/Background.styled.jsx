import styled from 'styled-components';

const StyledBackground = styled.div`
  padding: 80px 0;
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    background-image: url('/assets/pattern-background-desktop.svg');
    background-size: 100% 45%;
  }
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.paleBlue};
`;

export default StyledBackground;
