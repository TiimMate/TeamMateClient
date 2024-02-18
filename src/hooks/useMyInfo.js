import { useReducer } from 'react';

const MY_INFO = {
  avatarUrl: '',
  nickname: '',
  description: '',
  gender: new Array(2).fill(false),
  ageGroup: new Array(5).fill(false),
  region: '',
  height: '',
  position: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'INIT': {
      const {
        nickname,
        description,
        gender,
        ageGroup,
        region,
        height,
        position,
        avatarUrl,
      } = action.value;
      const formatGender = () => {
        if (gender === 'F') return [true, false];
        if (gender === 'M') return [false, true];
        return [false, false];
      };
      const formatAgeGroup = () => {
        if (ageGroup === '-10') return [true, false, false, false, false];
        if (ageGroup === '20-29') return [false, true, false, false, false];
        if (ageGroup === '30-39') return [false, false, true, false, false];
        if (ageGroup === '40-49') return [false, false, false, true, false];
        if (ageGroup === '50-') return [false, false, false, false, true];
        return [false, false, false, false, false];
      };

      return {
        ...state,
        avatarUrl,
        nickname,
        description: description ? description : '',
        gender: formatGender(),
        ageGroup: formatAgeGroup(),
        region,
        height: height.toString(),
        position: position ? position : '',
      };
    }
    case 'LOGO':
      return {
        ...state,
        avatarUrl: action.value,
      };
    case 'NICKNAME':
      return {
        ...state,
        nickname: action.value,
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

    case 'AGE_GROUP':
      return {
        ...state,
        ageGroup: action.value,
      };
    case 'REGION':
      return {
        ...state,
        region: action.value,
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
