import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import { LogadoProvider } from './services/userLogado/userContext.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <LogadoProvider>
    <App />
    </LogadoProvider>
    </Provider>
  </React.StrictMode>,
)
