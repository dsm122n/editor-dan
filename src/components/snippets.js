import * as monaco from 'monaco-editor'; // library to use monaco editor

const snippets = {
    // Secciones

    "remota": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Antecedentes médicos: ${1:Hipertensión arterial, Diabetes mellitus, }',
            '- Fármacos: ${2:fcos por aquí}',
            '- Antecedentes quirúrgicos: ${3:cesárea, apendicectomía}',
            '- Alergias: ${4:niega}',
            '- Hábitos: Tabaco (${5:+/-}), Alcohol (${6:+/-}), Drogas (${7:+/-})',
            '- G${8:num} P${9:num} A${10:num}, ${11:num pv} partos vaginales, ${12:num pc} cesáreas',
            '- Fecha de última regla: ${13:dd}/${14:mm}/${15:aaaa}',
            '- ${16:Menarquia a los num años, ciclos 30/V}',
            '- Anticoncepción: ${17:DIU, ACOS, Esterilización}'

        ].join('\n'),
        detail: 'Remota'
    },
    "hc_embarazo": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Paciente de ${1:edad} años, con antecedente de ${2:antecedentes médicos}. Cursando embarazo de ${4:num} semanas por FUR. Consulta por ${5:cuadro de }.\n',
            'Niega ${6:nauseas, vómitos, fiebre, disuria, tenesmo vesical, sangrado genital, dolor lumbar u otros síntomas}.'
        ].join('\n'),
        detail: 'Historia clínica embarazo' 
    },
    "hc_genérica": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Paciente de ${1:edad} años, con antecedente de ${2:antecedentes médicos}. Consulta por ${3:cuadro de }.\n',
            'Niega ${4:nauseas, vómitos, fiebre, disuria, tenesmo vesical, sangrado genital, dolor lumbar u otros síntomas}.'
        ].join('\n'),
        detail: 'Historia clínica genérica'
    },

    "EF_examen_físico": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- SV: T° ${1:num}°C, FC ${2:num} lpm, PA ${3:num}/${4:num} mmHg, FR ${5:num} rpm, SatO2 ${6:num}%',
            '- Mucosas ${7:hidratadas}, bien perfundida a distal',
            '- Tórax: ${8:RR2TSS}, ${9:MP(+) SRA}',
            '- Abdomen: ${10:Depresible}, ${11: indoloro a la palpación}, ${12: sin signos de irritación peritoneal}',
            '- Extremidades: ${13: sin edema ni signos de trombosis venosa profunda}',
            '- Especuloscopía: ${14: sin lesiones, sin sangrado}',
            '- TV: ${15: cuello posterior, firme, cerrado}'
        ].join('\n'),
        detail: 'Examen físico'
    },


    // Diagnósticos obste
    'dg_ingreso_egreso_gine': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '## Diagnósticos ingreso:',
            '1. ${1:Multípara de} ${2:num}, ${3:edad} años',
            '2. Embarazo de ${4:num} semanas por FUR${5:op}',
            '3. Trabajo de parto fase ${6:activa}',
            '4. IMC ${7:num}',
            '5. Riesgo tromboembólico ${8:num}',
            '',
            '## Diagnósticos egreso:',
            '1. ${9:Multípara de} ${10:num}, ${3:edad} años',
            '2. Puérpera ${11:2} días ${12:parto vaginal/cesárea}',

        ].join('\n'),
        detail: 'Diagnósticos ingreso y egreso'
    },
    'multípara': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'multípara de ${1:num}',
        detail: 'Multípara'
    },
    'primípara': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'primípara',
        detail: 'Primípara'
    },
    'nulípara': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'nulípara',
        detail: 'Nulípara'
    
    },



    // síntomas comunes
    'contracciones_utrinas': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'contracciones uterinas dolorosas ${1:cantidad y otros síntomas}',
        detail: 'Contracciones uterinas'
    },
    'dilatación_cervical': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'dilatación cervical ${1:num} cm, borramiento ${2:num}%, centrado',
        detail: 'Dilatación cervical'
    },
    'trabajo_parto': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'trabajo de parto en fase ${1:activa}',
        detail: 'Trabajo de parto'
    },
    'dolor_abdominal': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'dolor abdominal ${1:localización y características}, intensidad ${2:num}',
        detail: 'Dolor abdominal'
    },
    'sangrado_genital': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'sangrado genital ${1:características}',
        detail: 'Sangrado genital'
    },
    'movimientos_fetales': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'movimientos fetales ${1:num}',
        detail: 'Movimientos fetales'
    },
    'nauseas_vomitos': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'náuseas ${1:y} vómitos${2}',
        detail: 'Náuseas y vómitos'
    },
    'sin_otras_complicaciones': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'sin otras complicaciones',
        detail: 'Sin otras complicaciones'
    },
    'bcg': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'buenas condiciones generales',
        detail: 'BCG'
    },
    

    // condiciones egreso normales
    'condiciones_egreso_sano': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Hemodinamia estable, afebril, en buen estado general, ${1:buen manejo del dolor}, diuresis espontánea, mucosas hidratadas, bien perfundida a distal, abdomen ${2:levemente sensible a la palpación, sin signos de irritación peritoneal}, extremidades sin edema ni signos de trombosis venosa profunda.', 
        detail: 'Condiciones de egreso sanas'
    },

    // Procedimientos
    'parto_vaginal': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Parto vaginal espontáneo (${1:fecha} a las ${2:hora}), sin complicaciones. PN: ${3:num} g, Talla ${4:num} cm, APGAR ${5:num}-${6:num}, sexo ${7:ingrese}',
        ].join('\n'),
        detail: 'Parto PTVE'
    },
    'cesarea': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Cesárea (${1:fecha} a las ${2:hora}), sin complicaciones. PN: ${3:num} g, Talla ${4:num} cm, APGAR ${5:num}-${6:num}, sexo ${7:ingrese}',
        ].join('\n'),
        detail: 'Cesárea'
    },
    'histerectomia': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Histerectomía ${1:total/subtotal} vía ${2:laparoscópica}, sin complicaciones.',
        ].join('\n'),
        detail: 'Histerectomía'
    },
    'ht + salpingo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Histerectomía ${1:total + salpingectomía bilateral vía ${1:laparoscópica}, sin complicaciones.',
        ].join('\n'),
        detail: 'Histerectomía total + salpingectomía'
    },
    'ht + sob': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Histerectomía ${1:total} + salpingooforectomía bilateral vía ${1:laparoscópica}, sin complicaciones.',
        ].join('\n'),
        detail: 'Histerectomía total + '
    },
    'ht + sob + resección': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Histerectomía ${1:total} + salpingooforectomía bilateral + resección ${2:ganglionar}, sin complicaciones.',
        ].join('\n'), 
        detail: 'Histerectomía total + salpingooforectomía + resección'
    },

    // examenes
    'ex_hemograma': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Hb ${1:num}, Leucocitos ${2:num}, Plaquetas ${3:num}',
        description: 'Examen hemograma',
        detail: 'Hemograma'
    },
    'ex_coagulacion': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'INR ${1:num}, TP ${2:num}%, TTPK ${3:num}s',
        description: 'Examen coagulación',
        detail: 'Coagulación'
    },
    'ex_hepatico': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'GOT ${1:num}, GPT ${2:num}, BT ${3:num}, BD ${4:num}, GGT ${5:num}, FA ${6:num}',
        description: 'Examen hepático',
        detail: 'Hepático'
    },
    'ex_función_renal': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Creatinina ${1:num}, BUN ${2:num}',
        description: 'Examen función renal',
        detail: 'Función renal'
    },
    'ex_registro_basal_no_estresante': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Registro basal no estresante: ${1:reactivo}',
        description: 'Examen registro basal no estresante',
        detail: 'Registro basal no estresante'
    },
    'ex_ecografia': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ecografía: ${1:gestación única viva, presentación cefálica, líquido amniótico normal, placenta anterior}',
        description: 'Examen ecografía',
        detail: 'Ecografía'
    },

    //Resumen
    'resumen_puerpera': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Usuaria de ${1:edad} años, ${2:multípara}, cursando embarazo de ${3:num} semanas por FUR. Consulta al servicio de urgencias por contracciones uterinas dolorosas ${4:cantidad y otros síntomas}. Al examen físico se constata dilatación cervical ${5:num}cm, borramiento ${6:num}%, centrado.',
            'Se decide ingreso por ${7:trabajo de parto en fase activa}.',
            '',
            'Evoluciona ${8:evolución}. Se asiste parto vaginal, finalizando embarazo el ${8:fecha} a las ${9:hora} horas, sin complicaciones. Se recibe recién nacido de sexo ${10:sexo}, Peso ${11:PN} g, Talla ${12:TN} cm, APGAR ${13}-${14}. En puerperio evoluciona con buen manejo del dolor, con loquios hemáticos normales, logrando lactancia materna sin dificultades. Dada evolución favorable, se decide dar alta.',
        ].join('\n'),
        detail: 'Resumen puerpera'
    },
    // Resumen historia clinica estándar
    'resumen_hce': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Pciente de ${1:edad} años, con antecedentes descritos. ${2:Motivo de consulta}.',
            'Al ingreso ${3:hallazgos}.',
            'Se realiza ${4:procedimientos/tratamientos}',
            'Evoluciona ${5:con hemodinamia estable, afebril, buen manejo del dolor, sin otros síntomas, sin complicaciones}. Dada evolución favorable se decide alta'
        ].join('\n'),
        detail: 'Resumen historia clínica estándar'
    },
    // combo medicamentos partos 
    'combo_fco_parto': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
        '- Paracetamol ${1:1 gr} cada ${2:8 horas} ${3:ev}',
        '- Ketoprofeno ${4:100 mg} cada ${5:8 horas} ${6:ev}',
        '- Ampicilina según protocolo de profilaxis sepsis neonatal',
        '- Anestesia ${7:peridural}',
        '- Oxitocina según protocolo${8: de inducción}',
        ].join('\n'),
        detail: 'Combo fármacos parto'
    },
    'combo_fco_cirugia_electiva': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
        '- Cefazolina 2 gr vía endovenosa una vez',
        '- Paracetamol ${1:1 gr} cada ${2:8 horas} ${3:ev}',
        '- Ketoprofeno ${4:100 mg} cada ${5:8 horas} ${6:ev}',
        '- Anestesia ${7:general/raquídea/epidural}',
        '- Metoclopramida 10 mg vía endovenosa cada 8 horas',
        ].join('\n'),
        detail: 'Combo fármacos cirugía electiva'
    },
        

    // Fármacos
    'paracetamol_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Paracetamol 500 mg, 2 comprimidos vía oral cada 8 horas por ${1:5} días ${2:en caso de dolor}',
        description: 'Indicación paracetamol vía oral',
        detail: 'paracetamol vía oral'
    },
    'paracetamol_ev': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Paracetamol 1 g cada 8 horas vía endovenosa',
        description: 'Indicación paracetamol vía endovenosa',
        detail: 'paracetamol vía endovenosa'
    },


    'ketoprofeno_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ketoprofeno 50 mg, 1 cápsula vía oral cada 8 horas vía oral por ${1:3} días ${2:en caso de dolor}',
        description: 'Indicación ketoprofeno vía oral',
        detail: 'ketoprofeno vía oral'
    },
    'ketoprofeno_ev': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ketoprofeno 100 mg cada 8 horas vía endovenosa',
        description: 'Indicación ketoprofeno vía endovenosa',
        detail: 'ketoprofeno vía endovenosa'
    },

    'fcos_uso_habitual': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Reiniciar fármacos de uso habitual${1}',
        description: 'Indicación fármacos de uso habitual',
        detail: 'Fármacos de uso habitual'
    },

    // Indicaciones
    'plantilla_indicaciones_gine': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `**Generales**:
1. Reposo relativo
2. Régimen liviano
\${1: 3. Lactancia materna según indicación de pediatría}
4. Abstinencia sexual por \${2:40 días / 2 meses}
5. Aseo genital con agua, no utilizar jabón, secar con toques, no frotar // Mantener herida operatoria limpia y seca. Asear con agua escurriendo, secar con toques.

**Fármacos**:
  
1. Paracetamol 500 mg, 2 comprimidos vía oral cada 8 horas por 5 días
2. Ketoprofeno 50 mg, 1 cápsula vía oral cada 8 horas por 3 días en caso de dolor

**Controles**:
1. \${3:Control en 5-7 días con matrona en su CESFAM, debe acudir con recién nacido y solicitar hora con anticipación}
\${4:2. En caso de presentar irritabilidad marcada, rechazo a recién nacido, pena persistente o síntomas similares, acudir a su CESFAM para orientación y manejo.}
3. Consultar en urgencias en caso de síntomas de alarma tales como: \${5:dolor abdominal que no cede con analgesia, sangrado genital abundante, fiebre, u otros síntomas que estime deban recibir atención médica de urgencias}.
`,
        detail: 'Plantilla de indicaciones'
    },

    'reposo_regimen': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            'Reposo ${1:relativo}',
            'Régimen ${2:liviano}',
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
    },
    // diagnósticos

    'cacu': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Cáncer de cuello uterino',
        detail: 'CACU'
    },
    'ca_endometrio': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Cáncer de endometrio',
        detail: 'Cáncer de endometrio'
    },
    'nie': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Neoplasia intraepitelial de cérvix',
        detail: 'NIE'
    },
    'lie':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Lesión intraepitelial de cérvix',
        detail: 'LIE'
    },
    'cancer_mama': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Cáncer de mama',
        detail: 'Cáncer de mama'
    },
  };

export default snippets;
