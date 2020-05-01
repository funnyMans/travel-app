import { combineReducers } from "redux";
import initialState from "./initialState";
import ls from "local-storage";

const fbResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FB_INFO":
      state[0].auth = true;
      state[0].name = action.payload.name;
      state[0].image = action.payload.picture.data.url;
      state[0].email = action.payload.email;
      ls("state", state);
      return [...state];
    case "LOG_OUT":
      state[0].auth = false;
      state[0].name = "";
      state[0].image = "";
      console.log(state);
      ls("state", state);
      return [...state];

    default:
      return state;
  }
};

const googleResponseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOOGLE_INFO":
      state[1].auth = true;
      state[1].name = action.payload.profileObj.name;
      state[1].image = action.payload.profileObj.imageUrl;
      state[1].email = action.payload.profileObj.email;

      ls("state", state);
      return [...state];
    case "LOG_OUT":
      state[1].auth = false;
      state[1].name = "";
      state[1].image = "";
      console.log(state);
      ls("state", state);
      return [...state];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fbResponseReducer,
  googleResponseReducer,
});

export default rootReducer;
