/* eslint-disable */
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

export { component, render };
