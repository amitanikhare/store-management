import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules//bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import AddProduct from './modules/add-product/AddProduct';
import ViewProduct from './modules/view-product/ViewProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/view' element={<ViewProduct/>}/>
          <Route path='edit/:id' element={<AddProduct/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
