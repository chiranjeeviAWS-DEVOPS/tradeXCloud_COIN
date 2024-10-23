import { configureStore } from '@reduxjs/toolkit';
import { userAPI } from '../Services/apiList';
import tokenReducer from "./tokenDetails/tokenData";

const store = configureStore({
    reducer: {
      [userAPI.reducerPath]: userAPI.reducer,
      tokenData: tokenReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
  });
  
  export default store;