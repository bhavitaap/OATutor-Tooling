var hints = [{id: "solverat5a-h1", type: "hint", dependencies: [], title: "Lowest Common Denominator", text: "The first step is to find the lowest common denominator.", variabilization: {}}, {id: "solverat5a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(x+\\left(1\\right)\\right) \\left(x-\\left(1\\right)\\right)$$"], dependencies: ["solverat5a-h1"], title: "Lowest Common Denominator", text: "What is the lowest common denominator?", variabilization: {}}, {id: "solverat5a-h3", type: "hint", dependencies: ["solverat5a-h2"], title: "Distribute and multiply", text: "Distribute and multiply the lowest common denominator to all the terms.", variabilization: {}}, {id: "solverat5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(2\\right) x-\\left(2\\right)+x+\\left(1\\right)=1$$"], dependencies: ["solverat5a-h3"], title: "Distribute and multiply", text: "What is the result?", variabilization: {}}, {id: "solverat5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$x=\\frac{2}{3}$$"], dependencies: ["solverat5a-h4"], title: "Simple Algebra", text: "Solve for x. Please input the answer as $$variable=answer$$.", variabilization: {}}, {id: "solverat5a-h6", type: "hint", dependencies: ["solverat5a-h5"], title: "Double Check", text: "Plug answers for a back into the original equation to make the sure answer is correct and not undefined at any point.", variabilization: {}}, ]; export {hints};