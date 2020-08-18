import React from 'react';
import marked from 'marked';

import Panel from './Panel';

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

// Parses the text that that it gets from props as originalText
// and then renders output
export default function Previewer({ originalText, ...props }) {
  function createMarkup() {
    return { __html: marked(originalText, renderer) };
  }
  return (
    <Panel {...props} label="Previewer" className="Previewer">
      <div id="preview" className="markdown" dangerouslySetInnerHTML={createMarkup()} />
    </Panel>
  );
}