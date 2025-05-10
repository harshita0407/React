import './App.css'
// import LoginContinue from './zepto/LoginContinue'
// import React, { useState } from 'react';
// import Navbar from './zepto/Navbar';
// import Main from './zepto/Main';
// import Coffee from './zepto/Coffee';
// import Elevate from './zepto/Elevate'; 
// import Store from './zepto/Store';
// import Home from './zepto/Home';
// import Meal from './zepto/Meal';
// import Newstore from './zepto/Newstore';
// import Howitworks from './zepto/Howitworks';
// import Search from './zepto/Search';
// import Categories from './zepto/Categories';
// import Footer from './zepto/Footer';
import LoginForm from './zepto/LoginForm';



function App() {
  // const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
    {/* <LoginContinue/> */}
    <LoginForm/>
    {/* <div className="content-wrapper">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Main />
      <Coffee searchTerm={searchTerm}/> 
      <Elevate searchTerm={searchTerm}/>
      <Store />
      <Home />
      <Meal searchTerm={searchTerm}/>
      <Newstore searchTerm={searchTerm}/>
      <Howitworks />
      <Search />
      <Categories />
      <Footer />    
    </div> */}
    </>
  )
}

export default App