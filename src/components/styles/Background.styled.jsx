import styled from 'styled-components';

const StyledBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.paleBlue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledBackground;
