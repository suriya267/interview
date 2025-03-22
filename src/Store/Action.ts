const addUserAction = (payload: any) => {
  return {
    type: "USER_DETAILS_SAVE",
    payload: payload,
  };
};

export {addUserAction};
