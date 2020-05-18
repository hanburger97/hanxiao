
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


export const Container = styled.div`
  width: 100%;
  padding: 5rem;
  padding-top: 8rem;
  background-color: ${props => props.color};
  display: inline-block;
  margin: 0rem;
  height: auto;
  h1, h2, h3, h4, h5{
    color: #fff;
    text-align: center;
  };
  p {
    color: #fff;
    font-weight: 300;
  }
`;