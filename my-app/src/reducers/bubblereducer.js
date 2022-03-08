import { GET_BUBBLES } from "../constants";

export default function BubbleReducer(state=[],action){
    switch (action.type){
        case GET_BUBBLES:
            return { ...state,[action.payload.id]:action.payload};
            default: return state;
    }
}
