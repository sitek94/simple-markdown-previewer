import React from 'react';

import Panel from './Panel';
import marked from 'marked';

marked.setOptions({
  breaks: true,
  gfm: true,
});

export default function Previewer({ originalText, ...props }) {
  function createMarkup() {
    return { __html: marked(originalText) };
  }
  return (
    <Panel {...props} label="Previewer" className="Previewer">
      <div className="markup" dangerouslySetInnerHTML={createMarkup()} />
    </Panel>
  );
}