import React from 'react';
import PropTypes from 'prop-types';

import Panel from './Panel';

export default function Editor({ inputText, onChange, ...props }) {
  return (
    <Panel {...props} label="Editor" className="Editor">
      <textarea value={inputText} onChange={onChange} className="textarea" />
    </Panel>
  );
}

Editor.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}