import { combineReducers } from 'redux'

import carteira from './carteira/reducer'
import session from './session/reducer'

export default combineReducers({
    carteira,
    session
})