import { useReducer } from 'react';
import { MEMBER_RAW_DATA_BASKETBALL } from '../utils/formatData';

const TEAM_INFO = {
  logoUrl: '',
  name: '',
  description: '',
  gender: new Array(3).fill(false),
  age: new Array(5).fill(false),
  location: '',
  gym: '',
  members: MEMBER_RAW_DATA_BASKETBALL,
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
    case 'GYM':
      return {
        ...state,
        gym: action.value,
      };

    case 'MEMBERS':
      return {
        ...state,
        members: {
          sport: state.members.sport,
          data: state.members.data.filter(
            (member) => member.id !== action.value,
          ),
        },
      };

    default:
      return state;
  }
}

export default function useTeamInfo() {
  const [teamInfo, dispatch] = useReducer(reducer, TEAM_INFO);
  return [teamInfo, dispatch];
}
