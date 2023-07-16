import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import  UtilisateurConnecte from './UtilisateurConnecte'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'main-root',
    storage
}

const persistedReducer = persistReducer(persistConfig, UtilisateurConnecte)

export const store = configureStore({
    reducer: {
        utilisateur: persistedReducer,
        middleware: {thunk}
    }
})

export const persistor = persistStore(store)

