import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddPost/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/delete' element={<Delete/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
