var hints = [{id: "solverat7a-h1", type: "hint", dependencies: [], title: "Lowest Common Denominator", text: "The first step is to find the lowest common denominator.", variabilization: {}}, {id: "solverat7a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(x+\\left(5\\right)\\right) \\left(x-\\left(1\\right)\\right)$$"], dependencies: ["solverat7a-h1"], title: "Lowest Common Denominator", text: "What is the lowest common denominator?", variabilization: {}}, {id: "solverat7a-h3", type: "hint", dependencies: ["solverat7a-h2"], title: "Distribute and multiply", text: "Distribute and multiply the lowest common denominator to all the terms.", variabilization: {}}, {id: "solverat7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$2x-2-x-5=x^2+\\left(4\\right) x-\\left(5\\right)$$"], dependencies: ["solverat7a-h3"], title: "Distribute and multiply", text: "What is the result?", variabilization: {}}, {id: "solverat7a-h5", type: "hint", dependencies: ["solverat7a-h4"], title: "Quadratic Form", text: "Rearrange the equation into the quadratic form and factor.", variabilization: {}}, {id: "solverat7a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(x+\\left(2\\right)\\right) \\left(x+\\left(1\\right)\\right)=0$$"], dependencies: ["solverat7a-h5"], title: "Quadratic Form", text: "What is the result?", variabilization: {}}, {id: "solverat7a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=-2$$, $$x=-1$$"], dependencies: ["solverat7a-h6"], title: "Zero Product Property", text: "Solve for x. Please input the answer as $$variable=answer$$.", variabilization: {}}, {id: "solverat7a-h8", type: "hint", dependencies: ["solverat7a-h7"], title: "Double Check", text: "Plug answers for a back into the original equation to make the sure answer is correct and not undefined at any point.", variabilization: {}}, ]; export {hints};