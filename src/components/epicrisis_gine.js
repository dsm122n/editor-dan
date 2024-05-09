import { marked } from 'marked'; // library to convert markdown to HTML

let epicrisis_gine = '';

const readMd = require('../plantillas/epicrisis_gine.md');

const epicrisis_ginePromise = fetch(readMd)
  .then((response) => response.text())
  .then((text) => {
    epicrisis_gine = text;
    return epicrisis_gine;
  });

export default function getEpicrisisGine() {
  return epicrisis_ginePromise;
}