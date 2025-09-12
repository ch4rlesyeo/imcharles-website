'use client';

import ThemeSwitch from './theme-switch';

const Header = () => {
  return (
    <div className="flex justify-between my-4 px-4 h-[20px]">
      <div />
      <div />
      <div>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
