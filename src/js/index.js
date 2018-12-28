var myObject = require('./myDeps/test');

console.log('state', myObject.SALUT);

function createcomponent() {
    let element = document.createElement('div');

    const myObject = { key: 'dsgfgdfsgfdgfds', key1: 'fdsfdsfdsfdsfds'};

    element.innerHTML = myObject;

    console.log('hello webpack');
    return element;
  }

  document.body.appendChild(createcomponent());