import {
  NUMBER_SHOW,
  NUMBER_DELETE,
  NUMBER_CLEAR,
  NUMBER_ADD,
  NUMBER_MINUS,
  NUMBER_MULTIPLY,
  NUMBER_DIVIDE,
  NUMBER_EQUALS,
  NUMBER_INF,
} from '../actions/rootActions.js';

const initialState = {
  compute: [],
  joinedCompute: '',
};

function validateMaxSize(n) {
  if (n.length >= 10) {
    return null;
  }
  return n;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NUMBER_SHOW:
      console.log('showed');
      const isValidLength = validateMaxSize(state.compute);
      let compute = null;
      if (isValidLength != null) {
        compute = [...state.compute, `${action.payload}`];
      } else {
        compute = [`${action.payload}`];
      }
      return {
        ...state,
        compute: compute,
        joinedCompute: state.joinedCompute + `${action.payload}`,
      };
      break;

    case NUMBER_DELETE: {
      console.log('deleted');
      let compute = [...state.compute];
      if (compute.length > 0) {
        compute.pop();
      }
      return {
        ...state,
        compute: compute,
        joinedCompute: state.joinedCompute + `${action.payload}`,
      };
      break;
    }

    case NUMBER_CLEAR:
      console.log('cleared');
      return {
        ...state,
        compute: '',
        joinedCompute: '',
      };
      break;

    case NUMBER_ADD:
      console.log('added');
      return {
        ...state,
        compute: [...state.compute, `${action.payload}`],
        joinedCompute: state.joinedCompute + `${action.payload}`,
      };
      break;

    case NUMBER_MINUS:
      console.log('minus');
      return {
        ...state,
        compute: [...state.compute, `${action.payload}`],
        joinedCompute: state.joinedCompute + `${action.payload}`,
      };
      break;

    case NUMBER_DIVIDE:
      console.log('divided');
      return {
        ...state,
        compute: [...state.compute, `${action.payload}`],
        joinedCompute: state.joinedCompute + `${action.payload}`,
      };
      break;

    case NUMBER_MULTIPLY:
      console.log('multiplied');
      return {
        ...state,
        compute: [...state.compute, `${action.payload}`],
        joinedCompute: state.joinedCompute + `${action.payload}`,
      };
      break;

    case NUMBER_EQUALS:
      console.log(`${state.operation}`);
      let newNumber = 0;
      try {
        newNumber = eval(`${state.compute.join('')}`);
      } catch (e) {}
      return {
        ...state,
        compute: `${newNumber}`.split(''),
        joinedCompute: `${newNumber}`,
      };
      break;

    case NUMBER_INF:
      return {
        ...state,
      };
      break;

    default:
      return state;
      break;
  }
};
