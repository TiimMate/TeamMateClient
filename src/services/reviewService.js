import authInstance from './authInstance';

export const createGuestReview = async ({
  revieweeId,
  guestMatchId,
  skillScore,
  mannerScore,
}) => {
  const { data } = await authInstance.post('/reviews/user', {
    revieweeId,
    guestMatchId,
    skillScore,
    mannerScore,
  });

  return data;
};

export const createTeamReview = async ({
  teamMatchId,
  guestMatchId,
  skillScore,
  mannerScore,
}) => {
  const { data } = await authInstance.post('/reviews/team', {
    teamMatchId,
    guestMatchId,
    skillScore,
    mannerScore,
  });

  return data;
};
