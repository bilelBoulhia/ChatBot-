import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <h1 style={{ position: 'fixed', padding: 20, display: 'table', width: 'fit - content', backgroundColor: '', borderRadius: 10 }} >Chat with me</h1>
    <App />
  </React.StrictMode>,
)




