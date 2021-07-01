import { component as Component } from '../react-dom/index.js';
import styled from '../styled/index.js';

const props = {
  message: 'Basic styled-components API',
};

const Title = Component`<div>${'message'}</div>`(props);
const TitleStyled = styled.h1`
  color: #f2ffff;
  font-size: 4rem;
  text-shadow: 8px 6px 0 black;
`;

export default TitleStyled(Title);
