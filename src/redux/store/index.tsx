import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AuthSlice from '../slices/auth-slice'
import { WebStorage, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

interface PersitConfig {
    key: string
    storage: WebStorage
}

export const persistConfig: PersitConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    auth : AuthSlice
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  
  export const store = configureStore({
      reducer: persistedReducer
  })