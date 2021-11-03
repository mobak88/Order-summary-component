import styled from 'styled-components';

const StyledBackground = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1440px) {
    background-image: url('/src/assets/pattern-background-desktop.svg');
  }
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.paleBlue};
`;

export default StyledBackground;
