import authInstance from './authInstance';

export const getHostingMatchingList = async ({ date }) => {
  const { data } = await authInstance.get('/matchings/hosting', {
    params: {
      date,
    },
  });

  return data;
};

export const getGuestingMatchingList = async ({ date }) => {
  const { data } = await authInstance.get('/matchings/guesting', {
    params: {
      date,
    },
  });

  return data;
};
