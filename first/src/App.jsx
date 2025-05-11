// import './component/App1.css'
// // import LoginContinue from './zepto/LoginContinue'
// // import React, { useState } from 'react';
// // import Navbar from './zepto/Navbar';
// // import Main from './zepto/Main';
// // import Coffee from './zepto/Coffee';
// // import Elevate from './zepto/Elevate'; 
// // import Store from './zepto/Store';
// // import Home from './zepto/Home';
// // import Meal from './zepto/Meal';
// // import Newstore from './zepto/Newstore';
// // import Howitworks from './zepto/Howitworks';
// // import Search from './zepto/Search';
// // import Categories from './zepto/Categories';
// // import Footer from './zepto/Footer';
// import LoginForm from './component/LoginForm'
// import About from './par/About'
// import Home from './par/Home'
// import Navbar from './par/Navbar'


// import {createBrowserRouter, RouterProvider} from 'react-router-dom'



// function App() {
//   // const [searchTerm, setSearchTerm] = useState('');
//    const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<Home/>
//     },
//     {
//       path:'/about',
//       element:<About/>
//     },
//    ])
//   return (
//     <>

//     <Navbar/>
//     <RouterProvider router={router}/>
//     {/* <LoginContinue/> */}
//     {/* <LoginForm/> */}
//     {/* <div className="content-wrapper">
//       <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
//       <Main />
//       <Coffee searchTerm={searchTerm}/> 
//       <Elevate searchTerm={searchTerm}/>
//       <Store />
//       <Home />
//       <Meal searchTerm={searchTerm}/>
//       <Newstore searchTerm={searchTerm}/>
//       <Howitworks />
//       <Search />
//       <Categories />
//       <Footer />    
//     </div> */}
//     </>
//   )
// }

// export default App

import { useState } from "react";
import CouponSilder from "./ProductDetails/components/CouponSlider/CouponSilder";
import './ProductDetails/components/CouponSlider/Coupon.css'
// import './ProductDetails/product.css'
// import './ProductDetails/components/ListItems/Item.css'
// import ProductDetail from './ProductDetails/ProductDetail';
// import Navbar from './zepto/Navbar/Navbar'
// import './zepto/Navbar/Nav.css'
// import ItemPopUp from "./ProductDetails/components/ProductPopUp/ItemPopUp";
// import './ProductDetails/components/ProductPopUp/PopUp.css'
function App() {  
  // const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="App">
    {/* <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
    {/* <ProductDetail/> */}
     {/* <ItemPopUp/> */}

     <CouponSilder/>
    </div>
    
  );
}
export default App;

