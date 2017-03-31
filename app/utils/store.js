/**
 * Created by zz on 17/3/31.
 */
import { createStore, applyMiddleware } from 'redux'

import reducers from '../reducers'
import thunk from 'redux-thunk'
const createStoreWithMW = applyMiddleware(thunk)(createStore)
const store = createStoreWithMW(reducers)

export default store;