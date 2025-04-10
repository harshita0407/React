// import logo from './logo.svg';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './practical/Home';
// import About from './practical/About';
// import Contact from './practical/Contact';

import './App.css';
// import Login from './practical/Login';
// import CheckList from './practical/CheckList';
// import Accordion from './practical/Accordion';
// import Slider from './practical/Slider';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import SearchFilter from './practical/SeacrhFilter';
// import Counter from './practical/Counter';
// import ItemList from './practical/ItemList';

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <div className='container'>
    <TextForm heading="Enter the text to analyze"/></div>
    {/* <SearchFilter/> */}
    {/* <Counter/> */}
    {/* <h2>JavaScript Framwork</h2>
    <ItemList/> */}

    {/* <h1>Simple Accordion</h1>

    <Accordion title="Section1" content="This is content of section1"/>
    <Accordion title="Section2" content="This is content of section2"/>
    <Accordion title="Section3" content="This is content of section3"/>
 */}

    {/* <h1>Simple Siler image</h1>
    <Slider/> */}
    {/* <CheckList/> */}

    {/* <Login/> */}


    


  {/* return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   */}



    </>
  );
}

// const styles = {
//   nav: {
//     display: 'flex',
//     gap: '20px',
//     padding: '10px',
//     background: '#eee',
//   },
//   link: {
//     textDecoration: 'none',
//     color: 'black',
//     fontWeight: 'bold',
//   },
// };

export default App;
