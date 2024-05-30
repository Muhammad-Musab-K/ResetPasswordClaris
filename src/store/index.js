import { combineReducers } from '@reduxjs/toolkit';
import { ResetPassSlice } from './resetPass';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    resetResponse: ResetPassSlice.reducer
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;