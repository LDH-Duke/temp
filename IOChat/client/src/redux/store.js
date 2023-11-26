import {configureStore, createSlice} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

let account = createSlice({
    name:'account',
    initialState:'',
    reducers:{
        setUserId(state, action){
            console.log('store: ' + state)
            return action.payload
        }
    }
})

export let {setUserId} = account.actions


export default configureStore({
    reducer:{
        account : account.reducer
    },
    middleware: [thunk]
})