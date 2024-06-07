import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddPost/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/delete' element={<Delete/>}/>
          <Route path='/view' element={<ViewAll/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
