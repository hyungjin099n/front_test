
import { useEffect, useRef, useState } from 'react';
import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import axios from 'axios';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Join from './components/Join';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemDetail';
import dayjs from 'dayjs';


function App() {
  const a = 10;
  const a = 10;
  const [boardList, setBoardList] = useState([]);

  useEffect(() => {
    axios.get('/api/boards')
    .then(res => setBoardList(res.data))
    .catch(error => console.log(error));
  }, []);

  console.log(boardList);

  if(boardList.length !== 0){
    const aa = dayjs(boardList[0].createDate).format('YYYY-MM-DD HH:mm:ss')
    console.log(aa);
    
  }

  return (
    <>
      <h2>Hello React</h2>
      
      {
        boardList.map((e, i) => {
          return (
            <div key={i}>{e.createDate} {dayjs(e.createDate).format('YYYY-MM-DD HH:mm:ss')}</div>
          )
        })
      }
      

      <Routes>
        <Route path='/detail' element={<ItemDetail />}/>
      </Routes>
    </>
  )
}

export default App
