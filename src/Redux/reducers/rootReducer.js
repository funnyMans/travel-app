import { combineReducers } from "redux";
import initialState from "./initialState";
import ls from "local-storage";

const fbResponseReducer = (state = initialState[0], action) => {
  switch (action.type) {
    case "FB_INFO":
      state.auth = true;
      state.name = action.payload.name;
      state.image = action.payload.picture.data.url;
      state.email = action.payload.email;
      ls("state[0]", state);
      return Object.assign({}, state);
    case "LOG_OUT":
      state.auth = false;
      state.name = "";
      state.image = "";
      state.email = "";
      console.log(state);
      ls("state[0]", state);
      return Object.assign({}, state);

    default:
      return state;
  }
};

const googleResponseReducer = (state = initialState[1], action) => {
  switch (action.type) {
    case "GOOGLE_INFO":
      state.auth = true;
      state.name = action.payload.profileObj.name;
      state.image = action.payload.profileObj.imageUrl;
      state.email = action.payload.profileObj.email;

      ls("state[1]", state);
      return Object.assign({}, state);
    case "LOG_OUT":
      state.auth = false;
      state.name = "";
      state.image = "";
      state.email = "";
      console.log(state);
      ls("state[1]", state);
      return Object.assign({}, state);

    default:
      return state;
  }
};

const listReducer = (state = initialState[2], action) => {
  switch (action.type) {
    case "CITIES_LIST":
      ls("state[2]");
      return state;
    default:
      return state;
  }
};
const menuButtonReducer = (state = initialState[3], action) => {
  switch (action.type) {
    case "ARMENIAN_CITIES":
      state.menuButton = "CITIES";
      console.log(state);
      ls("state[3]", state);
      return Object.assign({}, state);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  fbResponseReducer,
  googleResponseReducer,
  menuButtonReducer,
  listReducer,
});

export default rootReducer;
