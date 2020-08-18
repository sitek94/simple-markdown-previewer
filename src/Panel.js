import React from 'react';
import PropTypes from 'prop-types';

function Panel({ label, isMaximized, onIconClick, children, className }) {
  return (
    <div className={`Panel ${className}`} >
      <div className="toolbar">
        <div className="label">
          {label}
        </div>
        <button onClick={onIconClick}>{isMaximized ? "minimize" : "maximize"}</button>
      </div>
      {children}
    </div>
  );
}

Panel.propTypes = {
  isMaximized: PropTypes.bool.isRequired,
  onIconClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
