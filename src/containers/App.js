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
`
# Markdown Previewer

Hi, I'm [Maciek](https://github.com/sitek94), welcome to my Markdown Previewer! 

The project was built for learning purposes as a part of **Front End Libraries Certification** by [freeCodeCamp](https://www.freecodecamp.org/).

You can find the challenge by clicking [here](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).

![freeCodeCamp](https://repository-images.githubusercontent.com/28457823/af1ed900-bddc-11e9-8162-a91c54bb11a1)

## Marked - Markdown Parser
[Marked] lets you convert [Markdown] into \`HTML\`.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use It?
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing? Then start changing stuff, have fun!

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

\`\`\`
// this is multi-line code:

function passTests(code) {
  if (code.includes(multiLineCode)) {
    return true;
  } else {
    return false;
  }
}
\`\`\`
`