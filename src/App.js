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

  const plantilla = `## Diagnósticos ingreso:
1. Multípara de [x], [x] años
2. Embarazo de [x] semanas por FUR
3. Trabajo de parto fase activa
4. IMC [x]
5. Riesgo tromboembólico [x]

## Diagnósticos egreso:
1. Multípara de [x+1], [x] años
2. Puérpera [x] días [parto vaginal/cesárea]

## Procedimientos:
- Parto PTVE ([x]/[x]/24 a las [x]:[x] horas), sin complicaciones. PN: [x] g, Talla [x] cm, APGAR [x]-[x]
- Cesárea ([x]/[x]/24 a las [x]:[x] horas), sin complicaciones. PN: [x] g, Talla [x] cm, APGAR [x]-[x]

## Medicamentos utilizados
- Paracetamol 1 gr cada 8 horas vía oral
- Ketoprofeno 50 mg cada 8 horas vía oral
- Ampicilina según protocolo de profilaxis sepsis neonatal
- Oxitocina según protocolo

## Resumen:

Usuaria de [x] años, multípara, cursando embarazo de [x] semanas por FUR. Consulta al servicio de urgencias por contracciones uterinas dolorosas [x] cada [x] minutos, [...]. Al examen físico se constata cuello uterino dilatado [x] cm, borramiento [x]%, centrado [...]. 
Se decide ingreso por [...]. 

Evoluciona [...]. Se asiste parto vaginal, finalizando embarazo el [x]/[x]/24 a las [x]:[x] horas, sin complicaciones. Se recibe recién nacido de sexo [x], Peso [x] g, Talla [x] cm, APGAR [x]-[x]. En puerperio evoluciona con buen manejo del dolor, con loquios hemáticos normales, logrando lactancia materna sin dificultades. Dada evolución favorable, se decide dar alta.

## Condiciones de egreso:

Hemodinamia estable, afebril, buen manejo del dolor, con loquios hemáticos normales, lactancia materna sin dificultades, [...].

## Indicaciones al Alta

**Generales**:
  1. Reposo relativo, deambular en domicilio
  2. Régimen habitual progresivo, preferir alimentos altos en fibra, hidratación con agua
  3. Lactancia materna según indicación de pediatría
  4. Abstinencia sexual por 40 días
  5. Aseo genital con agua, no utilizar jabón 

**Fármacos**:
  
  1. Paracetamol 1 gr cada 8 horas por 3 días en caso de dolor

**Controles**:
  1. Control en 5-7 días con matrona en su CESFAM, debe acudir con recién nacido y solicitar hora con anticipación
  2. En caso de presentar irritabilidad marcada, rechazo a recién nacido, pena persistente o síntomas similares, acudir a su CESFAM para orientación y manejo.
  3. Consultar en urgencias en caso de fiebre, sangrado vaginal abundante, dificultad respiratoria, vómitos que no permiten alimentarse, hinchazón y enrojecimiento de una o ambas mamas, aumento de volumen asociado a dolor en extremidades inferiores o dolor abdominal que no cede con analgesia.

  `;  

  return (
    <div style={{display: 'flex'}}>
      <Editor
        height="100vh"
        width="50vw"
        theme='vs-dark'
        defaultLanguage='markdown'
        onMount={onMount}
        onChange={handleEditorChange}

        value={plantilla}
        options={{
          wordWrap: 'on',
          
        }}
      />
      {/* Preview of Editor markdown */}
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '50vw', backgroundColor: 'black'}}>
        <div style={{height: '100vh', width: '100%', backgroundColor: 'white', padding: '20px', overflow: 'auto'}}>
          <div dangerouslySetInnerHTML={{__html: contenido}}></div>
        </div>
      </div>
    </div>
  );
}