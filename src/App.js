import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor'; // library to use monaco editor
import { marked } from 'marked'; // library to convert markdown to HTML
import snippets from './components/snippets';


// select tag for the user to choose a template
function SeleccionPlantillas() {
  // read file names from the plantillas directory
  const [files, setFiles] = useState([]);
  useEffect(() => {
    async function fetchFiles(uri) {
      const response = await fetch(uri);
      console.log('esta es la respuesta');
      console.log(response);
      const data = await response.json();
      setFiles(data);
    }
    fetchFiles('./plantillas/');
    console.log('esta es la función select');
    console.log(files);
  });
  const selectionStyle = {
    width: '400px',
    height: '30px',
    fontSize: '16px',
    margin: '5px',
  };
    return (
        <div style={{width: '100vw', height: 'auto', padding: '0px', margin: '0px'}}>
            <select style={selectionStyle}>
                <option value="" disabled selected>Selecciona una plantilla</option>
                {files.map((file) => (
                    <option key={file} value={file}>{file}</option>
                ))}
            </select>
        </div>
    );
}


export default function App() {


  const [contenido, setContenido] = useState('');
  const [md, setMd] = useState('');
 // Empty array means this effect runs once on mount
  useEffect(() => {
    async function fetchMd(uri) {
      setMd(null);
      const response = await fetch(uri);
      const text = await response.text();
      if (!ignore){
        setMd(text);
      }
      // 
    }
    let ignore = false;
    fetchMd("./plantillas/epicrisis_gine.md");
    return () => { ignore = true; }
  }, []);
  


  
  const myTheme = {
    base: 'vs-dark',
    inherit: true,
    rules: [{ background: '#000000', token: ''}],
    colors: {
      'editor.background': '#251E07',
      'editor.foreground': '#F7F4E0',
      'editorLineNumber.foreground': '#F7F4E0',
      'editorLineNumber.activeForeground': '#FCA0A0',
      'editorCursor.foreground': '#B6FE70',
      'editor.selectionBackground': '#4E4EFA',
      'editor.inactiveSelectionBackground': '#7B7BFE',
      'editor.selectionHighlightBackground': '#646465',
      'editor.findMatchBackground': '#4E4EFA',
      'editor.findMatchHighlightBackground': '#BBBEFF',
      'editor.findRangeHighlightBackground': '#646465',
      'editor.hoverHighlightBackground': '#847358',
      'editor.lineHighlightBackground': '#494A24',
      'editor.rangeHighlightBackground': '#608B8D',
      'editorWhitespace.foreground': '#646465',
      
    


  }
  };


  const handleEditorChange = (value, event) => {
    setContenido(marked(value)); // convert markdown to HTML and update state
  };
  const onMount = (editor, monaco ) => {
    // console log of files from plantillas
    monaco.editor.defineTheme('myTheme', myTheme);
    monaco.editor.setTheme('myTheme'); 
    editor.focus();
    setContenido(marked(editor.getValue())); // convert markdown to HTML and update state
    
    monaco.languages.registerCompletionItemProvider('markdown', {
      // triggerCharacters: ['.'], // Trigger snippet on dot (can be customized)
      provideCompletionItems: (model, position) => {
            const suggestions = [];
            for (const [key, value] of Object.entries(snippets)) {
                suggestions.push({
                    label: key,
                    kind: value.kind,
                    insertText: value.insertText,
                    insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                    detail: value.detail,
                    documentation: value.description
                });
            }
            return { suggestions: suggestions };
          }
        });
    /* registerSnippets();
    console.log("snippet is registered");
    console.log(monaco.languages.getLanguages()); */
    
  };
  



  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

      <SeleccionPlantillas/>
      <div style={{display: 'flex', flexDirection: 'col', flexWrap: 'wrap', 
        width: '100vw', height: 'auto', padding: '0px', margin: '0px'
      }}>
        <Editor
          height='calc(100vh - 40px)'
          padding='0px'
          margin='0px'
          width="49vw"
          theme='vs-dark'
          defaultLanguage='markdown'
          onMount={onMount}
          onChange={handleEditorChange}
          value={md}
          options={{
            wordWrap: 'on',
            
          }}
        />
        {/* Preview of Editor markdown */}
          <div style={{
            height: 'calc(100vh - 40px)', 
            width: '49vw', 
            backgroundColor: 'white', 
            padding: '0px', 
            overflow: 'auto'}}>
            <div dangerouslySetInnerHTML={{__html: contenido}}></div>
          </div>
      </div>
    </div>
  );
}