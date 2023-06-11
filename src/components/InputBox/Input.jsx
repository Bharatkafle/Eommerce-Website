import React, { useState, useRef, useEffect } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import './Input.css';

const Input = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearchClick = () => {
    setIsInputOpen(true);
  };

  const handleOutsideClick = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsInputOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='input__container'>
      <div className='input__wrapper'>
        <RiSearchLine className='search__icon' onClick={handleSearchClick} />
        {isInputOpen && (
          <input
            ref={inputRef}
            className='input__field'
            type='text'
            placeholder='Search...'
            autoFocus
          />
        )}
      </div>
    </div>
  );
};

export default Input;
