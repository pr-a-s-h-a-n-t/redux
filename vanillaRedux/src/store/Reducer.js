import React from "react";

import * as actions from "./ActionCreator";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + 1 };

    case actions.DECREMENT:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default reducer;
