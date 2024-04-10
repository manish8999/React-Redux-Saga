// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'; 
// import App from './App.tsx';
// import './index.css';
// import store from './store'; 

// ReactDOM.render(
//   <Provider store={store}> 
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );

// index.js
// index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Change the import statement
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import store from './store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

