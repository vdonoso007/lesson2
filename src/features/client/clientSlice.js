import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const clientSlice = createSlice({
  name: 'client',
  initialState: {
    clients: [
      {names: 'Juan Recalde', email:'jrecalde@gmail.com', phone: '0989755008', status:'Active'},
      {names: 'Marlon Zela', email:'mzela@tumail.com', phone: '0978455998', status:'Active'},
      {names: 'Tony Lopez', email:'tlopez@terna.com', phone: '0963744112', status:'Active'},
      {names: 'Carlos Mape', email:'cmape@gmail.com', phone: '0963989562', status: 'Active'}
    ]
  },
  reducers: {
    addList: (state, action) =>  {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.clients = action.payload;
    },
    decrement: state => {
      state.value -= 1;
    }
  },
});

export const { addList, decrement } = clientSlice.actions;

export const clientList = state => state.client.clients

export const rootReducer = combineReducers({
  client: clientSlice.reducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['client']
}

export default persistReducer(persistConfig, rootReducer)

//export default counterSlice.reducer;
