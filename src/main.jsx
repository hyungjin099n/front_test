import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import dayjs from 'dayjs';
// import 'dayjs/locale/ko'; // 한국어 가져오기

// dayjs.locale('ko'); // 언어 등록

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
