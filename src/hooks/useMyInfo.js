import { useReducer } from 'react';

const MY_INFO = {
  logoUrl: '',
  name: '',
  description: '',
  gender: new Array(2).fill(false),
  age: new Array(5).fill(false),
  location: '',
  height: '',
  position: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGO':
      return {
        ...state,
        logoUrl: action.value,
      };
    case 'NAME':
      return {
        ...state,
        name: action.value,
      };
    case 'DESCRIPTION':
      return {
        ...state,
        description: action.value,
      };
    case 'GENDER':
      return {
        ...state,
        gender: action.value,
      };

    case 'AGE':
      return {
        ...state,
        age: action.value,
      };
    case 'LOCATION':
      return {
        ...state,
        location: action.value,
      };
    case 'HEIGHT':
      return {
        ...state,
        height: action.value,
      };

    case 'POSITION':
      return {
        ...state,
        position: action.value,
      };

    default:
      return state;
  }
}

export default function useMyInfo() {
  const [myInfo, dispatch] = useReducer(reducer, MY_INFO);
  return [myInfo, dispatch];
}
