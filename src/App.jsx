import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-800 dark:bg-white'>
      <div className='max-w-[600px] shadow-md p-6 rounded-md bg-white dark:bg-purple-500'>
        <div className='flex items-start sm:items-center mb-4'>
          <h1 className='text-4xl flex-1 text-black dark:text-white'>Tailwind Dark/Light Mode</h1>
          <img className={`${darkMode ? 'block' : 'hidden'} moon cursor-pointer w-8`} src='./icon-moon.png' onClick={toggleDarkMode} alt='Moon' />
          <img className={`${darkMode ? 'hidden' : 'block'} sun cursor-pointer w-10`} src='./icon-sun.svg' onClick={toggleDarkMode} alt='Sun' />
        </div>
        <p className='text-md text-black dark:text-white mb-4'>
          In this this tutorial we will be learning how to enable dark mode for your Tailwind website/app.
          Also, we will show how we can create a toggle to change between a light & dark theme.
        </p>
        <button className='py-2 px-4 bg-black text-white rounded-md'>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default App;


