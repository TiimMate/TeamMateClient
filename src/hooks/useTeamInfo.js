import { useReducer } from 'react';

const TEAM_INFO = {
  category: '',

  logoUrl: '',
  name: '',
  description: '',
  gender: new Array(3).fill(false),
  ageGroup: new Array(5).fill(false),
  region: '',
  gymName: '', // TEST

  participants: {
    leader: {
      nickname: '',
      height: '',
      position: '',
    },
    member: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'INIT': {
      const {
        name,
        description,
        gender,
        ageGroup,
        region,
        gymName,
        participants,
      } = action.value;
      const formatGender = () => {
        if (gender === 'F') return [true, false, false];
        if (gender === 'M') return [false, true, false];
        if (gender === 'MX') return [false, false, true];
        return [false, false, false];
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
        name,
        description,
        participants,
        gender: formatGender(),
        ageGroup: formatAgeGroup(),
        region,
        gymName,
      };
    }
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
    case 'GYM_NAME':
      return {
        ...state,
        gymName: action.value,
      };

    case 'MEMBERS':
      return {
        ...state,
        participants: {
          leader: state.participants.leader,
          member: state.participants.member.filter(
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
