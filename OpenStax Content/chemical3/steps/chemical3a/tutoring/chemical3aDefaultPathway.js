var hints = [{id: "chemical3a-h1", type: "hint", dependencies: [], title: "First Shell occupancy", text: "First, we need to determine how many electrons can fit in each shell. How many electrons can fit in the first cell?", subHints: [{id: "chemical3a-h1-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: [], title: "First Shell occupancy", text: "The first electron shell can fit at most 2 electrons in it.", variabilization: {}}, ], variabilization: {}}, {id: "chemical3a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: ["chemical3a-h1"], title: "Subsequent Shell occupancy", text: "How many electrons can subsequent shells after the first fit in?", subHints: [{id: "chemical3a-h2-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["8"], dependencies: [], title: "Subsequent Shell occupancy", text: "Shells after the first can hold up to 8 electrons in them", variabilization: {}}], variabilization: {}}, {id: "chemical3a-h3", type: "hint", dependencies: ["chemical3a-h2"], title: "Total shell occupancy", text: "How many full shells can be created with 19 electrons (remember that the first shell can only hold 2 electrons)", subHints: [{id: "chemical3a-h3-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3"], dependencies: [], title: "Total shell occupancy", text: "It takes 18 electrons to fill 3 shells. How many shells can you make with 19 electrons?", variabilization: {}}, ], variabilization: {}}, {id: "chemical3a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: ["chemical3a-h3"], title: "Left over electrons", text: "How many electrons will you have left over after filling 3 shells? ", subHints: [{id: "chemical3a-h4-s1", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["1"], dependencies: [], title: "Left over electrons", text: "What is 19-18?", variabilization: {}}], variabilization: {}}, ]; export {hints};