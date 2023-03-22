import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)
import styles from './scss/application.scss'

root.render(<App />)
