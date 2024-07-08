import React from 'react';

const LogoBar = () => {
  return (
    <div className='logo-bar-section'>
        <div className='w-layout-grid logo-grid'>
            <div className='logo-box-copy1'></div>
            <div className='logo-box'><img src="images/cofor.png" alt="" width="Auto" sizes="18vw" srcset="images/cofor-p-500.png 500w, images/cofor.png 664w" class="client-log-cofor"></img></div>
            <div class="logo-box"><img src="images/epic.png" alt="" class="client-logo"></img></div>
            <div class="logo-box"><img src="images/dohiech.png" alt="" class="client-logo-copy"></img></div>
            <div class="logo-box-copy2"></div>
        </div>
    </div>
  );
};

export default LogoBar;