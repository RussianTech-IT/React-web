import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react';
import Start from './pages/Start/Start'
import Home from './pages/Home/Home'
import Loader from './pages/components/Loader/Loader';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
