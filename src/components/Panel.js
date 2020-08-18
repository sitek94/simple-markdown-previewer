import React from 'react';

import { FaReact } from 'react-icons/fa';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';

function Toolbar({ isMaximized, label, onResizeIconClick }) {
  return (
    <div className="Toolbar">
      <FaReact className="logo" />
      <div className="label"> {label}</div>
      <button className="button" onClick={onResizeIconClick}>
        {isMaximized ? <MdFullscreenExit /> : <MdFullscreen />}
      </button>
    </div>
  );
}

export default function Panel({ children, ...props }) {
  return (
    <div className="Panel">
      <Toolbar {...props} />
      {children}
    </div>
  );
}

