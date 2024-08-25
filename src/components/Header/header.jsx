import React, { useContext } from 'react';
import { FaBrain, FaSmile, FaQuoteRight, FaLaugh, FaHeartBroken, FaTypo3 } from 'react-icons/fa'; // Import some icons
import ThemeSwitcher from '../../ThemeSwitcher';
import { ThemeContext } from '../../ThemeContext';

const Header = () => {
    const {setArrOf,arrOf,theme} = useContext(ThemeContext)
    const clsBtn = `${theme ==='dark' ? 'border-blue-500' : 'border-blue-950'}`
    const linkCls = `hidden sm:flex`;
  return (
    <header className={`${theme === 'dark' ? ' bg-gray-950 text-white' : 'bg-blue-600 text-white '}  bg-blue-500 text-white z-20 p-4 flex justify-between items-center`}>
      <h1 className="text-xl md:text-2xl transition-all font-bold flex items-center "  style={{fontFamily:'Brush Script MT',color: theme === 'dark' ?'#0ff' : '#fff'}}> <FaTypo3/> Amin.S</h1>
      <p className=" absolute bottom-3 right-3 text-lg flex items-center">
           
          </p>
      <nav className="flex space-x-4">
        <button onClick={() => setArrOf('quotes')} className={`flex   border-b-4  items-center ${arrOf === 'quotes'? clsBtn : 'border-transparent '} p-1  transition-all`}>
          <FaQuoteRight className="mx-1 sm:mr-2" />  <span className={linkCls}>Thoughts</span>
        </button>
        <button onClick={() => setArrOf('psychology')} className={`flex border-b-4  items-center ${arrOf === 'psychology'? clsBtn : 'border-transparent '}  p-1   transition-all`}>
          <FaBrain className="mx-1 sm:mr-2" />  <span className={linkCls}>Psychology</span>
        </button>
        <button onClick={() => setArrOf('joke')} className={`flex border-b-4   items-center ${arrOf === 'joke'? clsBtn : ' border-transparent'}  p-1   transition-all`}>
          <FaLaugh className="mx-1 sm:mr-2" />  <span className={linkCls}>Jokes</span>
        </button>
        <button onClick={() => setArrOf('shayari')} className={`flex  border-b-4 justify-center items-center ${arrOf === 'shayari'? clsBtn : ' border-transparent'}  p-1  transition-all `}>
          <FaHeartBroken className="mx-1 sm:mr-2" /> <span className={linkCls}>Shayari</span>
        </button>
        
        <ThemeSwitcher/>
      </nav>
    </header>
  );
};

export default Header;
