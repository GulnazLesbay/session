import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import { Normalize } from 'styled-normalize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( //dom iwindegi komp kors
//проверка жас инструмент
  <React.StrictMode> 
    <Provider store={store}>
      <Normalize /> браузерлерде CSS ті дұрстайды
      <App />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
