import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import NoteReducer from './reducers/NoteReducer'
import LoggedinReducer from './reducers/LoggedinReducer'
import UserReducer from './reducers/UserReducer'
import MessageReducer from './reducers/MessageReducer'
import ChoosedEmail from './reducers/ChoosedEmail'

const store = configureStore({
    reducer: {
        loggedin: LoggedinReducer,
        notes: NoteReducer,
        users: UserReducer,
        message: MessageReducer,
        rspwemail: ChoosedEmail,
    }
})

console.log(store.getState())

store.subscribe(()=>{
    console.log[store.getState()]
})

export default store