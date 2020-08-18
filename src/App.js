import React, { useState } from 'react';

import Previewer from './Previewer';
import Editor from './Editor';

export default function App() {
  const [singleWindowMode, setSingleWindowMode] = useState(false);



  const [showEditor, setShowEditor] = useState(true);
  const [showPreviewer, setShowPreviewer] = useState(true);

  const singleWindowStyle = {
    gridTemplateRows: '1fr',
    gridTemplateColumns: '1fr',
  };

  const maximizeEditor = () => {
    setShowPreviewer(false);
    setSingleWindowMode(true);
  };

  const maximizePreviewer = () => {
    setShowEditor(false);
    setSingleWindowMode(true);
  };

  const minimizeEditor = () => {
    setShowPreviewer(true);
    setSingleWindowMode(false);
  };

  const minimizePreviewer = () => {
    setShowEditor(true);
    setSingleWindowMode(false);
  };

  const [inputText, setInputText] = useState('');
  const handleChange = (e) => {
    setInputText(e.target.value);
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
          text={inputText}
          onIconClick={singleWindowMode ? minimizePreviewer : maximizePreviewer}
        />
      )}
    </div>
  );
}
