/**
 * Created by chenjianwei on 17/3/31.
 */
import {TEST} from './ActionTypes';

const test = (state = 0) => dispatch => {
    dispatch(add(state + 1))
}

const add = params => {
    return {
        type: TEST.INCREMENT,
        params,
    }
}

export default {
    test,
}