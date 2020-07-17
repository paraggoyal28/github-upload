const elBox = document.querySelector('#box');

const states = {
  active : {
    on: {
    CLICK : 'inactive',
    }
  },
  inactive: {
    on: {
    CLICK: 'active',
    }
  }
}
// Pure function that returns the next state,
// given the current state and sent event
function transition(state, event) {
  return states[state]?.on?.[event]  ||   state;
}

// Keep track of your current state
let currentState = 'inactive';

function send(event) {
  // Determine the next value of `currentState`
  currentState = transition(currentState, event);
  elBox.dataset.state = currentState;
}

elBox.addEventListener('click', () => {
  // send a click event
  send('CLICK');
});
