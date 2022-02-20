import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const fetchVideos = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_VIDEOS,
    });

    try {
      const { data } = await axios.get(
        "http://api.aparat.com/fa/v1/video/video/mostViewedVideos"
      );
      const videos = data.data.map((result: any) => {
        return result.attributes.preview_src;
      });

      dispatch({
        type: ActionType.FETCH_VIDEOS_SUCCESS,
        payload: videos,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_VIDEOS_ERROR,
        payload: error.message,
      });
    }
  };
};
