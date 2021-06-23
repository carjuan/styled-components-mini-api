/* eslint-disable */
import { styled, Title } from './utils/styled-components.js';
import { render } from './utils/simpleReact.js';

const TitleStyled = styled.h1`
  color: #f2ffff;
  font-size: 4rem;
  text-shadow: 8px 6px 0 black;
`;


render(TitleStyled(Title), document.getElementById('root'));
