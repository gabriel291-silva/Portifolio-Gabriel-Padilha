import './App.css';
import Header from './component/header/header.tsx';
import { Route,Routes, BrowserRouter } from "react-router-dom";
import Home from './component/home/home.tsx';
import Footer from './component/footer/footer.tsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
       <Routes>
       <Route  element={<Home/>}   path="/"  />
       </Routes>
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
