import { ActionType } from "../action-types";

interface FetchVideosAction {
  type: ActionType.FETCH_VIDEOS;
}
interface FetchVideosSuccessAction {
  type: ActionType.FETCH_VIDEOS_SUCCESS;
  payload: string[];
}
interface FetchVideosErrorAction {
  type: ActionType.FETCH_VIDEOS_ERROR;
  payload: string;
}

export type Action =
  | FetchVideosAction
  | FetchVideosErrorAction
  | FetchVideosSuccessAction;
