import React from 'react';

import Panel from './Panel';

export default function Editor({ inputText, onChange, ...props }) {
  return (
    <Panel {...props} label="Editor" className="Editor">
      <textarea value={inputText} onChange={onChange} className="textarea" />
    </Panel>
  );
}
