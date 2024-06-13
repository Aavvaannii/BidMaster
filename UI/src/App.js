import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './component/HeaderCom/header';
import Banner from './component/BannerCom/banner';
import Home from './component/HomeCom/home';
import About from './component/AboutCom/about';
import Contact from './component/ContactCom/contact'
import Login from './component/LoginCom/login';
import Register from './component/RegisterCom/register';
import Service from './component/ServiceCom/service';
import Footer from './component/FooterCom/footer';
import Adminhome from './component/AdminhomeCom/adminhome';
import Manageusers from './component/ManageusersCom/manageusers';
import Userhome from './component/UserhomeCom/userhome';
import Logout from './component/LogoutCom/logout';
import EPAdmin from './component/EPAdminCom/epadmin';
import CPAdmin from './component/CPAdminCom/cpadmin';
import CPUser from './component/CPUserCom/cpuser';
import EPUser from './component/EPUserCom/epuser';
import Addcategory from './component/AddcategoryCom/addcategory';
import Addsubcategory from './component/AddsubcategoryCom/addsubcategory';

function App() { 
  return (

    <>
     <Header />

     <Banner />

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/service" element={<Service />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/user" element={<Userhome />}></Route>
      <Route path="/admin" element={<Adminhome />}></Route>
      <Route path="/manageusers" element={<Manageusers />}></Route>
      <Route path="/epadmin" element={<EPAdmin />}></Route>
      <Route path="/cpadmin" element={<CPAdmin />}></Route>
      <Route path="/cpuser" element={<CPUser />}></Route>
      <Route path="/epuser" element={<EPUser />}></Route>
      <Route path="/addcategory" element={<Addcategory />}></Route>
      <Route path="/addsubcategory" element={<Addsubcategory />}></Route>
      <Route path="/logout" element={<Logout/>}></Route>


    </Routes>
    
     <Footer />
  
    </>
  );
}

export default App;
