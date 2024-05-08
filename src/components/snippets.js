import * as monaco from 'monaco-editor'; // library to use monaco editor

const snippets = {

    // Fármacos
    'paracetamol_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Paracetamol 1 gr cada 8 horas vía oral por ${1:5} días ${2:en caso de dolor}',
        description: 'Indicación paracetamol vía oral',
        detail: 'paracetamol vía oral'
    },
    'ketoprofeno_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ketoprofeno 50 mg cada 8 horas vía oral por ${1:3} días ${2:en caso de dolor}',
        description: 'Indicación ketoprofeno vía oral',
        detail: 'ketoprofeno vía oral'
    },
    'fcos_uso_habitual': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Reiniciar fármacos de uso habitual${1}',
        description: 'Indicación fármacos de uso habitual',
        detail: 'Fármacos de uso habitual'
    },

    // Indicaciones
    'reposo_regimen': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Reposo ${1:relativo}',
            'Régimen ${2:habitual progresivo}, preferir alimentos altos en fibra, hidratación con agua$3',
        ].join('\n'),
        detail: 'Reposo y régimen alimenticio',        
    },
    'control_puerperio':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Control${1: de la díada} en ${2:5-7} días con ${3:matrona}, en ${4:CESFAM correspondiente}, agendar hora. ${5:Debe acudir con recién nacido}',
            'En caso de presentar irritabilidad marcada, rechazo a recién nacido, pena persistente o síntomas similares, acudir a su CESFAM para orientación y manejo$6',
        ].join('\n'),
        detail: 'Control y consulta en urgencias'
    },
    'sos':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Consultar en urgencias en caso de síntomas de alarma tales como: ${1:dolor abdominal que no cede con analgesia, sangrado genital abundante, fiebre, dificultad respiratoria, u otros síntomas que estime deban recibir atención médica de urgencias}.',
        description: 'Indicación de consulta en urgencias',
        detail: 'Consulta sos en urgencias'
    }
  };

export default snippets;