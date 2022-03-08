import * as BubbleService from '../services/bubbleService';
import { GET_BUBBLES } from '../constants';

export const getBubbles = () => async dispatch => {
    const bubbles = await BubbleService.getBubblesService();

    dispatch(getBubbleSuccess(bubbles));
};

const getBubbleSuccess = bubbles => ({
    type:GET_BUBBLES,
    payload: bubbles
});