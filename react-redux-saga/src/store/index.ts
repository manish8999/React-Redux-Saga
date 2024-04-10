// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducres';
// import rootSaga from '../store/saga';
// import { configureStore} from '@reduxjs/toolkit';

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(sagaMiddleware),
// });

// sagaMiddleware.run(rootSaga);

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