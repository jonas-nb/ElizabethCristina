import React, { useState, useEffect } from 'react';
import icon from '../../assets/img/icon.png';
import { AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = event => {
      setIsMobile(event.matches);
    };

    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-around">
        <img className="w-52 drop-shadow-md" src={icon} alt="" />
        <div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost rounded-btn text-2xl text-white"
            >
              <AiOutlineMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-around">
        <img className="w-52 drop-shadow-md" src={icon} alt="" />
        <ul className="flex space-x-4 text-white text-xl">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    );
  }
};

export default Nav;
