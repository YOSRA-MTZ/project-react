import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState} from 'react';
import axios from 'axios';
import {BrowserRouter} from 'react-router-dom';
import './index.css';

const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(
<BrowserRouter>
<App />
</BrowserRouter>
);

//root.render(<Home />);

reportWebVitals();
