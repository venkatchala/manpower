const manpowerReducer = function (state = [], action) {
  switch (action.type) {
    case "addUserDetail":
      return [...state, action.payload];
  }
};
export default manpowerReducer;
