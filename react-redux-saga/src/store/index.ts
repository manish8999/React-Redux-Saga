import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducres'
import mySaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(mySaga)

export default store;