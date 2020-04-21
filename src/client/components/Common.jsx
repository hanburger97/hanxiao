
import styled from 'styled-components';
import palette from '../global.js';
export const Link = styled.a`
  color: ${palette.primaryColor};
  font-weight: 500;
  &: hover{
    color: ${palette.primaryColorLight};
    font-weight: 500;
  }
`;
