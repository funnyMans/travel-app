export const handleFbResponse = (newResponse) => {
  return {
    type: "FB_INFO",
    payload: newResponse,
  };
};

export const handleGoogleResponse = (newResponse) => {
  return {
    type: "GOOGLE_INFO",
    payload: newResponse,
  };
};

export const handleLogOut = () => {
  return {
    type: "LOG_OUT",
  };
};

export const handleCheckedButton = () => {
  return {
    type: "ARMENIAN_CITIES",
  };
};

export const handleList = () => {
  return {
    type: "CITIES_LIST",
  };
};
