import { combineReducers } from "redux";
import videosReducer from "../reducers/videosReducer";

const reducers = combineReducers({
  videos: videosReducer,
});

export default reducers;

// it's here to tell react-redux type of information inside the store
export type RootState = ReturnType<typeof reducers>;
