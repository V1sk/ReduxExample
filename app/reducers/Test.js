/**
 * Created by chenjianwei on 17/3/31.
 */

import createReducer from '../utils/create-reducer';
import {TEST} from '../actions/ActionTypes';

const initialState = {
    params: 0,
}

const actionHandler = {
    [TEST.INCREMENT]: (state, action) => {
        return Object.assign({}, state, {params: action.params});
    }
}

export default createReducer(initialState, actionHandler)