import React, { useRef, useEffect, useState } from 'react';
import { Editor } from '@monaco-editor/react';
import * as monaco from 'monaco-editor'; // library to use monaco editor
import { marked } from 'marked'; // library to convert markdown to HTML
import snippets from './components/snippets';
import plantilla from './components/plantillas';

  
  
export default function App() {

  const [contenido, setContenido] = useState('');
    
    
  const handleEditorChange = (value, event) => {
    setContenido(marked(value)); // convert markdown to HTML and update state
  };

  
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

  const onMount = (editor, monaco ) => {
    monaco.editor.defineTheme('myTheme', myTheme);
    monaco.editor.setTheme('myTheme'); 
    editor.focus();
    editor.setValue(plantilla);

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
    <div style={{display: 'flex'}}>
      <Editor
        height="100vh"
        width="50%"
        theme='vs-dark'
        defaultLanguage='markdown'
        onMount={onMount}
        onChange={handleEditorChange}
        
        options={{
          wordWrap: 'on',
          
        }}
      />
      {/* Preview of Editor markdown */}
        <div style={{height: '100vh', width: '50%', backgroundColor: 'white', padding: '0px', overflow: 'auto'}}>
          <div dangerouslySetInnerHTML={{__html: contenido}}></div>
        </div>
    </div>
  );
}