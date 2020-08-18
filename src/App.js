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
  const [inputText, setInputText] = useState('');
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
          isMaximized={showEditor}
          inputText={inputText}
          onChange={handleChange}
          onIconClick={singleWindowMode ? minimizeEditor : maximizeEditor}
        />
      )}
      {showPreviewer && (
        <Previewer
          isMaximized={showPreviewer}
          originalText={inputText}
          onIconClick={singleWindowMode ? minimizePreviewer : maximizePreviewer}
        />
      )}
    </div>
  );
}
