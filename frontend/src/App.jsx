import './App.css';
import Start from './pages/Start/Start'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import { Suspense } from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<div>404</div>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
