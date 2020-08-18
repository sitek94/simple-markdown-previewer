import React, { useState } from 'react';

import Previewer from './Previewer';
import Editor from './Editor';

export default function App() {
  // Single window mode
  const [singleWindowMode, setSingleWindowMode] = useState(false);

  // When changing to single window mode, I apply inline style
  // to change display to 1x1 grid
  const singleWindowStyle = {
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
  };

  // Editor
  const [showEditor, setShowEditor] = useState(true);
  const maximizeEditor = () => {
    setShowPreviewer(false);
    setSingleWindowMode(true);
  };
  const minimizeEditor = () => {
    setShowPreviewer(true);
    setSingleWindowMode(false);
  };
  
  // Handle textarea input from Editor component
  const [inputText, setInputText] = useState(placeholder);
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  // Previewer
  const [showPreviewer, setShowPreviewer] = useState(true);
  const maximizePreviewer = () => {
    setShowEditor(false);
    setSingleWindowMode(true);
  };
  const minimizePreviewer = () => {
    setShowEditor(true);
    setSingleWindowMode(false);
  };

  return (
    <div className="App" style={singleWindowMode ? singleWindowStyle : null}>
      {showEditor && (
        <Editor
          isMaximized={singleWindowMode}
          inputText={inputText}
          onChange={handleChange}
          onResizeIconClick={singleWindowMode ? minimizeEditor : maximizeEditor}
        />
      )}
      {showPreviewer && (
        <Previewer
          isMaximized={singleWindowMode}
          originalText={inputText}
          onResizeIconClick={singleWindowMode ? minimizePreviewer : maximizePreviewer}
        />
      )}
    </div>
  );
}

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
`