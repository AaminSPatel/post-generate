import React, { useContext, useState } from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import {  ThemeContext }  from './ThemeContext';
import QuoteContainer from './components/QuoteContainer/quoteContainer';
function App() {
  const {theme} = useContext(ThemeContext);
  
  return (
    
    <div className={`min-h-screen  flex flex-col ${theme === 'dark' ? 'bg-slate-800 ' : 'bg-slate-100'} `}>
      <Header/>
      <main className="flex-grow p-2 z-30">
        
        <div className="mt-5">
          <QuoteContainer/>
        </div>
      </main>
      {/* SVG Balls will be placed in the background */}
      <div className="absolute overflow-hidden inset-0 z-0 ">
          <svg
            className="absolute w-24 h-24 bottom-100 right-100   animate-bounce2 animation-delay-200"
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
            className="absolute w-24 h-24 bottom-22 right-16   animate-bounce2 animation-delay-200"
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
            <circle cx="12" cy="12" r="7" />
          </svg><svg
            className="absolute w-24 h-24 bottom-92 right-46   animate-bounce animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466ff30"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-12 right-46   animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466ff30"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-44 right-50 animate-bounce animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="5" />
          </svg>
          <svg
            className="absolute w-54 h-14 bottom-64 right-80 animate-bounce animation-delay-400"
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
            className="absolute w-24 h-24 bottom-24 right-20 animate-bounce animation-delay-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="6" />
          </svg><svg
            className="absolute w-24 h-24 bottom-34 right-90 animate-bounce animation-delay-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-34 right-100 animate-bounce animation-delay-600"
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
          </svg><svg
            className="absolute w-24 h-24 bottom-70 right-92 animate-bounce2 animation-delay-200"
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
            className="absolute w-24 h-24 bottom-32 right-96 animate-bounce animation-delay-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-32 right-86 animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="7" cy="7" r="7" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-60 right-44 animate-bounce animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="2" cy="2" r="2" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-20 right-82 animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="14" cy="14" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-28 right-56 animate-bounce animation-delay-600"
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
            className="absolute w-24 h-24 bottom-20 right-100 animate-bounce2 animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="2" cy="2" r="2" />
          </svg> 
          <svg
            className="absolute w-24 h-24 bottom-20 right-82 animate-bounce animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="14" cy="14" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-28 right-56 animate-bounce2 animation-delay-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="4" cy="4" r="4" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-72 right-72 animate-bounce2 animation-delay-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="#4466f930"
            viewBox="0 0 24 24"
          >
            <circle cx="7" cy="7" r="7" />
          </svg>
          <svg
            className="absolute w-24 h-24 bottom-60 right-60 animate-bounce animation-delay-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ff777730"
            viewBox="0 0 24 24"
          >
            <circle cx="2" cy="2" r="2" />
          </svg>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
