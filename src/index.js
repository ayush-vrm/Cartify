import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {store} from "./redux/Store";
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    {/* <ToastContainer> */}
    <Provider store={store}>
        <App />
        <Toaster/>
    </Provider>
    {/* </ToastContainer> */}

    </BrowserRouter>

);


reportWebVitals();
