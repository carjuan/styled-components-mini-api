/* eslint-disable */
import domElements from './utils/domElements.js';

console.log(domElements);
function component(strings, ...dynamic) {
  return function (props) {
    let newContent = strings.slice();
    dynamic.forEach((val, i) => {
      newContent[i] += props[val];
    });
    return newContent.join('');
  };
}

function render(component, container) {
  container.innerHTML += component;
}

const styled = {
  h1(styles) {
    return (content) => `
        <h1 style="${styles}">
          ${content}
        </h1>
      `;
  },
};

const TitleStyled = styled.h1`
  color: #f2ffff;
  font-size: 4rem;
  text-shadow: 8px 6px 0 black;
`;

const props = {
  message: 'No te rindas',
};
const title = component`<div>${'message'}</div>`(props);

render(TitleStyled(title), document.getElementById('root'));
