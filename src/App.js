import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { marked } from 'marked'; // library to convert markdown to HTML

export default function App() {
  
  const [contenido, setContenido] = useState('');

  const handleEditorChange = (value, event) => {
    setContenido(marked(value)); // convert markdown to HTML and update state
  }
  const onMount = (editor, monaco) => {
    editor.focus();
  }


  return (
    <div style={{display: 'flex'}}>
      <Editor
        height="100vh"
        width="50vw"
        theme='vs-dark'
        defaultLanguage='markdown'
        onMount={onMount}
        onChange={handleEditorChange}
      />
      {/* Preview of Editor markdown */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '50vw', backgroundColor: 'black'}}>
        <div style={{height: '100%', width: '100%', backgroundColor: 'white', padding: '20px'}}>
          <div dangerouslySetInnerHTML={{__html: contenido}}></div>
        </div>
      </div>
    </div>
  );
}