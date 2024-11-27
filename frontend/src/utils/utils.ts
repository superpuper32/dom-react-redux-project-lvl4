type TAuth = {
    Authorization: string;
} | {};

const getAuthHeader = (): TAuth => {
  const userId = JSON.parse(localStorage.getItem('userId') || "false");

  if (userId && userId.token) {
    return { Authorization: `Bearer ${userId.token}` };
  }

  return {};
};

export default getAuthHeader;
