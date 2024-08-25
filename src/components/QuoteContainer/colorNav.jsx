// Navbar.js
import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
//import { colorThemes } from './colors';
const gradients = [
    {
      d: "radial-gradient(circle, #001f3f, #003366)",
      l: "radial-gradient(circle, #8dd, #00aaff)"
    },
    {
      d: "radial-gradient(circle, #ff3b3f, #ff6f00)",
      l: "radial-gradient(circle, #ff5f6d, #ffc371)"
    },
    {
      d: "radial-gradient(circle, #4a0072, #6a1b9a)",
      l: "radial-gradient(circle, #9a2b9a, #ab47bc)"
    },
    {
      d: "radial-gradient(circle, #1a202c, #000000)",
      l: "radial-gradient(circle, #ccc, #aaa)"
    },
    {
      d: "radial-gradient(circle, #204147, #005d60)",
      l: "radial-gradient(circle, #205cc1, #00d2ff)"
    },
    {
      d: "radial-gradient(circle, #4a5d23, #4a5d23)",
      l: "radial-gradient(circle, #d0f0c0, #d0f0c0)"
    },
    
    {
      d: "radial-gradient(circle, #003d34, #002f2f)",
      l: "radial-gradient(circle, #4db6ac, #4db6ac)"
    },
    {
      d: "radial-gradient(circle, #001f2f, #001f2f)",
      l: "radial-gradient(circle, #fff, #fff)"
    }
    
  ];
const Navbar = () => {
    const {theme,gradiObj,setGradiObj} = useContext(ThemeContext);
  return (
    <nav className={`p-4 flex items-center justify-center w-fit px-5 mx-auto flex-row flex-wrap  ${theme ==='dark' ? 'bg-slate-800' : 'bg-slate-100'} rounded-full `} >
      <div className={`flex space-x-5 flex-row flex-wrap p-1 px-3`}>
        {gradients.slice(0,4).map((color, index) => (
          <button
            key={index}
            onClick={() => setGradiObj(color)}
            className="w-6 h-6 rounded-full hover:scale-110 border-2 transition-all"
            style={{ background: theme === 'dark' ? color.d : color.l ,borderColor :theme === 'dark' ?'#ddd':'#555'}}
          />
        ))}
      </div>
      <div className={`flex space-x-5 flex-row flex-wrap p-1  px-3`}>
        {gradients.slice(4,9).map((color, index) => (
          <button
            key={index}
            onClick={() => setGradiObj(color)}
            className="w-6 h-6 rounded-full  hover:scale-110  border-2 transition-all"
            style={{ background: theme === 'dark' ? color.d : color.l ,borderColor :theme === 'dark' ?'#ddd':'#555'}}
          />
        ))}
      </div>
      
    </nav>
  );
};

export default Navbar;
