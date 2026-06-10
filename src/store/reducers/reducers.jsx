import { APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, EQUAL, MEMORY_ADD, MEMORY_RECALL, MEMORY_CLEAR } from '../actions/actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp:0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return num2;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: state.total === 0 
          ? action.payload 
          : Number(state.total.toString() + action.payload.toString()),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        temp: state.total, 
        operation: action.payload, 
        total: 0, 
      };
    
    case CLEAR_DISPLAY:
      return {
        ...state,
        total: 0
      };
      case EQUAL:
     
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
        temp: 0, 
      };
      case MEMORY_ADD:
      
      return { ...state, memory: state.total };
      case MEMORY_RECALL:
      
      return {
        ...state,
        total: state.total === 0 
          ? state.memory 
          : Number(state.total.toString() + state.memory.toString()),
      };
      case MEMORY_CLEAR:
      
      return { ...state, memory: 0 };
    default:
      return state;
  }
};

export default reducer;
