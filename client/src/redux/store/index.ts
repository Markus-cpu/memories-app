import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import reducers from '../reducers'

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export type AppState = ReturnType<typeof reducers>
export default store