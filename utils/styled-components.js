/* eslint-disable */
import domElements from './domElements.js';
import {component} from './simpleReact.js'

const props = {
  message: 'Basic styled-components API'
}

const Title = component`<div>${'message'}</div>`(props);
const assignToObject_v1 = (obj, tag) => {
  const tagFunc = function(styles) {
    return (content) => `
    <${tag} style="${styles}">
      ${content}
    </${tag}>
  `;
  }
  return {
    ...obj,
    [tag]: tagFunc,
  }
}

const assignToObject_v2 = (obj, tag) => {
  const tagFun = function(styles) {
    return (content) => `
    <${tag} style="${styles}">
      ${content}
    </${tag}>
  `;
  }

  Object.defineProperty(obj, tag, {
    value: tagFun,
    enumerable: true,
  })

  return obj;
}
const styled = domElements.reduce(assignToObject_v2, {})

export {
  styled,
  Title
}
