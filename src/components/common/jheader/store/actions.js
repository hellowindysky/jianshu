import { SEARCH_FOCUS, SEARCH_BLUR } from "./action-types";

export const handleIptFocus = (data) => ({type: SEARCH_FOCUS, data: data});
export const handleIptBlur = (data) => ({type: SEARCH_BLUR, data: data});