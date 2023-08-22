
import './App.css';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBarLogin from './Components/Uitily/NavBarLogin';
import Footer from './Components/Uitily/Footer';
import LoginPage from './Pages/Auth/LoginPage';
import Rigester from './Pages/Auth/RigesterPage';
import AllCategoryPage from './Pages/Category/AllCategoryPage';
import AllBrandPage from './Pages/Brand/AllBrandPage';
function App() {
  return (
    <div className="font">
      <NavBarLogin/>
      <BrowserRouter>
      <Routes>
     <Route index element={<HomePage/>}/> 
{/* index bdal path lanaha safha resia */}
<Route path='/login' element={<LoginPage/>}/>
<Route path='/register' element={<Rigester/>}/>
<Route path='/allcategory' element={<AllCategoryPage/>}/>
<Route path='//allbrand' element={<AllBrandPage/>}/>
      </Routes>
      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
