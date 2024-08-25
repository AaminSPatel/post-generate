import React, { useState, useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
import quotesArray from "./quotes";
import JokesArray from "./jokes";
import shayari from "./shayari";
import psychologyTrickArray from "./psycho";
import html2canvas from 'html2canvas'
//import { ThemeContext } from './ThemeContext';
import ColorNav from './colorNav.jsx'
import { Fa500Px, FaTypo3 } from "react-icons/fa";
const QuoteContainer = () => {
  const { theme, toggleTheme, arrOf ,gradiObj} = useContext(ThemeContext);
  const [quote, setQuote] = useState(
    "Click the button to generate a random quote."
  );
  
  const generateRandomQuote = () => {
    if (arrOf === "joke") {
      const quotes = JokesArray;
      const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)].joke;
      setQuote(randomQuote);
    } else if (arrOf === "shayari") {
      const quotes = shayari;
      const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)].shayari;
      setQuote(randomQuote);
    } else if (arrOf === "psychology") {
      const quotes = psychologyTrickArray;
      const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)].trick;
      setQuote(randomQuote);
    } else {
      const quotes = quotesArray;
      const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)].quote;
      setQuote(randomQuote);
    }
  };
/* 
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
      d: "radial-gradient(circle, #e65100, #e65100)",
      l: "radial-gradient(circle, #ff6f00, #ff6f00)"
    },
    {
      d: "radial-gradient(circle, #003d34, #002f2f)",
      l: "radial-gradient(circle, #4db6ac, #4db6ac)"
    },
    {
      d: "radial-gradient(circle, #001f2f, #001f2f)",
      l: "radial-gradient(circle, #fff, #fff)"
    }
    
  ]; */
  function captureScreenshot() {
    // Select the container
    const container = document.getElementById('capture');

    // Use html2canvas to capture the screenshot
    html2canvas(container).then(canvas => {
      // Create a link element
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'screenshot.png';

      // Append link to the body
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Remove link from the body
      document.body.removeChild(link);
    });}

    function captureHdScreenshot() {
      // Select the container
      const container = document.getElementById('capture');
  
      // Use html2canvas to capture the screenshot
      html2canvas(container, {
        scale: 2 // Increase scale for higher quality
      }).then(canvas => {
        // Create a link element
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'screenshot.png';
  
        // Append link to the body
        document.body.appendChild(link);
        
        // Trigger the download
        link.click();
        
        // Remove link from the body
        document.body.removeChild(link);
      });}
  

  const bgRadialcls = `${theme ==='dark' ? gradiObj.d : gradiObj.l}`

  return (
    <>
    <div className="rounded-lg overflow-hidden  mx-auto w-fit">
    <div id="capture"
        className={`relative p-5 max-w-md   shadow-xl ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        } overflow-hidden`} style={{backgroundImage : `${bgRadialcls}`} }
      >
        <div className="relative z-30 h-[300px] border-2 border-amber-700 rounded flex justify-center items-center flex-col gap-7 ">
          <p
            className={`mb-4 text-center text-xl font-semibold flex items-center p-3 rounded-md `}
          >
            {quote}
          </p>
          <p className="text-amber-600 absolute bottom-3 right-3 text-lg flex items-center" style={{fontFamily:'Brush Script MT'}}>
            <FaTypo3/> Amin.S
          </p>
        </div>
        {/* SVG Balls will be placed in the background */}
        <div className="absolute opacity-20 inset-0 z-0 ">
          <svg
            className="absolute w-24 h-24 bottom-72 right-56   animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466ff30"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="8" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-72 right-56   animate-bounce animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466ff30"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="8" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-64 right-80 animate-bounce animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-0 right-72 animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466ff30"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="6" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-24 right-80 animate-bounce animation-delay-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="8" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-0 right-16 animate-bounce animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="14" cy="14" r="7" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-0 right-32 animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="14" cy="14" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-32 right-16 animate-bounce animation-delay-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-32 right-56 animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="7" cy="7" r="7" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-20 right-44 animate-bounce animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="2" cy="2" r="2" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-20 right-32 animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="14" cy="14" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-2 right-16 animate-bounce animation-delay-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-72 right-72 animate-bounce animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="7" cy="7" r="7" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-20 right-10 animate-bounce2 animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="2" cy="2" r="2" />
          </svg>
        </div>
        
      </div>
    </div>
      
      <ColorNav/>
      <div className="w-full flex items-center justify-center gap-4 mb-2 flex-row flex-wrap">
        <button
          onClick={generateRandomQuote}
          className={`px-6 py-2 rounded-full text-white  font-semibold ${
            theme === "dark"
              ? " bg-blue-900 hover:bg-blue-950 "
              : "  bg-blue-600  hover:bg-blue-800"
          } focus:outline-none`}
        >
          Generate <span className="capitalize">{arrOf}</span> 
        </button>
        <button
          onClick={captureScreenshot}
          className={`px-6 py-2 rounded-full font-semibold ${
            theme === "dark"
              ? " bg-blue-900 hover:bg-blue-950 "
              : "  bg-blue-600    hover:bg-blue-800"
          } focus:outline-none text-white`}
        >
          Download
        </button>
        <button
          onClick={captureHdScreenshot}
          className={`px-6 py-2 rounded-full font-semibold ${
            theme === "dark"
              ? " bg-amber-800 hover:bg-amber-900 "
              : "  bg-amber-600    hover:bg-amber-800"
          } focus:outline-none text-white`}
        >
         HD Download 
        </button>
      </div>
    </>
  );
};

export default QuoteContainer;
