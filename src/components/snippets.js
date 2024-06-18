import * as monaco from 'monaco-editor'; // library to use monaco editor

const snippets = {
    // Secciones

    "remota": {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: [
            '- Antecedentes médicos: ${1:Hipertensión arterial, Diabetes mellitus, }',
            '- Fármacos: ${2:fcos por aquí}',
            '- Alergias: ${3:niega}',
            '- Antecedentes quirúrgicos: ${4:cirugías}',
            '- Hábitos: Tabaco (${5:+/-}), Alcohol (${6:+/-}), Drogas (${7:+/-})',

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
    
    'ibuprofeno_vo_400': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ibuprofeno 400 mg, 1 comprimido vía oral cada ${1:6} horas vía oral por ${2:5} días',
        description: 'Indicación ibuprofeno vía oral',
        detail: 'ibuprofeno vía oral'
    },
    'ibuprofeno_vo_600': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ibuprofeno 600 mg, 1 comprimido vía oral cada 8 horas vía oral por ${1:5} días',
        description: 'Indicación ibuprofeno vía oral',
        detail: 'ibuprofeno vía oral'
    },

    'ondansetron_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Ondansetron 8 mg, 1 comprimido vía oral cada 8 horas por ${1:3} días',
        description: 'Indicación ondansetron vía oral',
        detail: 'ondansetron vía oral'
    },
    
    'metoclopramida_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Metoclopramida 8 mg, 1 comprimido vía oral cada 8 horas por ${1:3} días 30 minutos previo a las comidas o antes de acostarse',
        description: 'Indicación metoclopramida vía oral',
        detail: 'metoclopramida vía oral'

    },

    'domperidona_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Domperidona 10 mg, 1 comprimido vía oral cada 8 horas por ${1:3} días',
        description: 'Indicación domperidona vía oral',
        detail: 'domperidona vía oral'
    },
    'loratadina_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Loratadina 10 mg, 1 comprimido vía oral cada 24 horas por ${1:7} días',
        description: 'Indicación loratadina vía oral',
        detail: 'loratadina vía oral'
    },
    'cetirizina_vo':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Cetirizina 10 mg, 1 comprimido vía oral cada 24 horas por ${1:7} días',
        description: 'Indicación cetirizina vía oral',
        detail: 'cetirizina vía oral'
    },
    'prednisona_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Prednisona 10 mg, 3 comprimidos (tomar juntos) al día durante ${1:4} días',
        description: 'Indicación prednisona vía oral',
        detail: 'prednisona vía oral'
    },
    'omeprazol_vo': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Omeprazol 20 mg, 1 comprimido vía oral en ayunas mientras toma prednisona',
        description: 'Indicación omeprazol vía oral',
        detail: 'omeprazol vía oral'
    },

    'fcos_uso_habitual': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Reiniciar fármacos de uso habitual${1}',
        description: 'Indicación fármacos de uso habitual',
        detail: 'Fármacos de uso habitual'
    },

    // indicaciones por enfermedad según variegatus
    'ind_rinofaringitis': {
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: ' - Ibuprofeno 400mg 1 comprimido cada 8 horas \n- Paracetamol 500 mg, 2 comprimidos vía oral cada 8 horas por ${1:5} días ${2:en caso de dolor}\n- Buena hidratación, debe ingerir al menos 2 litros de líquido al día, (agua, zumos, infusiones, gelatinas, etc).\n - ACUDIR NUEVAMENTE A URGENCIA si presenta: Empeoramiento del estado general, Dificultad para respirar  (respira muy deprisa, se le marcan las costillas, o se le hunda el pecho), Dolor torácico, Fiebre alta que no cede con antitérmicos\n'
    },
     'ind_cefalea':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: '- Naproxeno 500mg: 1 comprimido cada 12 horas  ( recuerde tomarlo lo antes posible, cuando esté empezando el dolor), por 3 días\n- Paracetamol 500 mg, 2 comprimidos vía oral cada 8 horas por ${1:5} días ${2:en caso de dolor}\n- Debe estar en un sitio tranquilo, sin ruidos, ni luz. Si el dolor es intenso, lo mejor es que se acueste. No es conveniente que vea la televisión mientras tenga dolor.\n - ACUDIR NUEVAMENTE A URGENCIA si presenta signos de empeoramiento como: alteración en la visión, debilidad de fuerza en brazos o piernas, dificultad para hablar, caminar o coordinar movimientos, fiebre, vómitos, convulsiones, dolor de cabeza muy intenso que no cede con analgésicos, u otro síntoma que estime deba recibir atención médica de urgencias\n',
        description: 'Indicación cefalea',
        detail: 'Cefalea'

     },
     'ind_gastroenteritis_aguda':{
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: `
- Hidratación con sales de rehidratación oral tras cada episodio de vómito o diarrea (disolver 1 sobre en 1 litro de agua)
- Comer alimentos blandos y cocidos, evitar alimentos grasos, picantes, fritos, lácteos, frutas y verduras crudas
- Paracetamol 500 mg, 2 comprimidos cada 8 horas, si dolor, malestar o fiebre
- Metoclopramida 10mg, 1 comprimido 30 minutos antes de comer si tiene nauseas o vómitos
*** niños[- vómitos: 4 ml/kg tras cada episodio, max 250 ml y diarrea: 10 ml/kg tras cada episodio, max 250 ml 
- Probióticos (Saccharomyces boulardii) 1 sobre al día por 10 días
`,
        description: 'Indicación gastroenteritis aguda',
        detail: 'Gastroenteritis aguda'
        },
        'ind_uriticaria':{
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `
- Cetirizina 10 mg, 1 comprimido vía oral cada 24 horas por 7 días (si persisten síntomas, reiniciar y acudir a control)
- Prednisona 10 mg, 3 comprimidos (tomar juntos) al día durante 4 días
[- Cobefen (Betametasona 0.25 mg + dexclorfeniramina 2 mg) 1 comprimido cada 12 horas por 5 días]
- Evitar rascado de la piel
- ACUDIR NUEVAMENTE A URGENCIA si presenta: dificultad para respirar, dolor torácico, fiebre, u otros síntomas que estime deban recibir atención médica de urgencias
- Control en CESFAM en 5-7 días para evaluar respuesta y requerimiento de continuar estudio
`,
            description: 'Indicación urticaria',
            detail: 'Urticaria'
        },

        'decalaje_prednisona':{
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: `
Inicialmente: PREDNISONA 10 mg, 3 comprimidos (tomar juntos) al día durante 4 días

Después: PREDNISONA 10 mg, 2 comprimidos (tomar juntos) al día durante 4 días

Después: PREDNISONA 10 mg, 1 comprimido  al día durante 4 días  y suspender

OMEPRAZOL 20 mg: 1 comprimido al día en ayunas mientras toma PREDNISONA`,
            description: 'Indicación decalaje prednisona',
            detail: 'Decalaje prednisona'
        
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
        insertText: 'Consultar en urgencias en caso de síntomas de alarma tales como: ${1:dolor abdominal que no cede con analgesia, dificultad respiratoria, fiebre, persistencia o exacerbación de síntomas, u otros síntomas que estime deban recibir atención médica de urgencias}.',
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
