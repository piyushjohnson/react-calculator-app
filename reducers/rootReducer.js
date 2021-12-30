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
  number: '',
  lastNumber: '',
  lastOperation: '',
  operation: '',
  compute: [],
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
      const isValidLength = validateMaxSize(state.number);
      let number = null;
      let compute = null;
      if (isValidLength != null) {
        number = `${state.number}${action.payload}`;
        compute = [...state.compute, `${action.payload}`];
      } else {
        number = `${action.payload}`;
        compute = [`${action.payload}`];
      }
      return {
        ...state,
        number: number,
        compute: compute,
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
        number: `${state.number.slice(0, state.number.length - 1)}`,
        compute: compute,
      };
      break;
    }

    case NUMBER_CLEAR:
      console.log('cleared');
      return {
        ...state,
        number: `${(state.number = '')}`,
        lastNumber: '',
        operation: '',
        compute: '',
      };
      break;

    case NUMBER_ADD:
      console.log('added');
      return {
        ...state,
        lastOperation: action.payload,
        lastNumber: state.number,
        number: `${(state.number = '')}`,
        operation: action.payload,
        compute: [...state.compute, `${action.payload}`],
      };
      break;

    case NUMBER_MINUS:
      console.log('minus');
      return {
        ...state,
        lastOperation: action.payload,
        lastNumber: state.number,
        number: `${(state.number = '')}`,
        operation: action.payload,
        compute: [...state.compute, `${action.payload}`],
      };
      break;

    case NUMBER_DIVIDE:
      console.log('divided');
      return {
        ...state,
        lastOperation: action.payload,
        lastNumber: state.number,
        number: `${(state.number = '')}`,
        operation: action.payload,
        compute: [...state.compute, `${action.payload}`],
      };
      break;

    case NUMBER_MULTIPLY:
      console.log('multiplied');
      return {
        ...state,
        lastOperation: action.payload,
        lastNumber: state.number,
        number: `${(state.number = '')}`,
        operation: action.payload,
        compute: [...state.compute, `${action.payload}`],
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
        number: `${newNumber}`,
        lastNumber: 0,
        lastOperation: '',
        operation: '',
        compute: `${newNumber}`.split(''),
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
