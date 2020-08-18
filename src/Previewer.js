import React from 'react';
import PropTypes from 'prop-types';
import './markdown-style.scss';

import Panel from './Panel';
import marked from 'marked';

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
      <div className="markdown" dangerouslySetInnerHTML={createMarkup()} />
    </Panel>
  );
}

Previewer.propTypes = {
  originalText: PropTypes.string.isRequired
}