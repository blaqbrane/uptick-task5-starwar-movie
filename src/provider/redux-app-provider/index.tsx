import { ReactNode } from 'react'
import {Provider} from 'react-redux'
import { store } from '../../redux/store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from '../../components/elements/page-loader'

interface AppReduxI {
    children:ReactNode
}
const AppReduxProvider:React.FC<AppReduxI> = ({children}) => {
    const persistReduxStore = persistStore(store)
  return (
    <Provider store={store}>
        <PersistGate loading={<Loader/>} persistor={persistReduxStore}>
        {children}
        </PersistGate>
    </Provider>
  )
}

export default AppReduxProvider