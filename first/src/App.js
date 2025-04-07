// import logo from './logo.svg';
import './App.css';
import Accordion from './practical/Accordion';
// import Navbar from './components/Navbar';
// import SearchFilter from './practical/SeacrhFilter';
// import Counter from './practical/Counter';
// import ItemList from './practical/ItemList';

function App() {
  return (
    <>
    {/* <Navbar title="TextUtils"/> */}
    {/* <SearchFilter/> */}
    {/* <Counter/> */}
    {/* <h2>JavaScript Framwork</h2>
    <ItemList/> */}

    <h1>Simple Accordion</h1>

    <Accordion title="Section1" content="This is content of section1"/>
    <Accordion title="Section2" content="This is content of section2"/>
    <Accordion title="Section3" content="This is content of section3"/>
    </>
  );
}

export default App;
