var hints = [{id: "solverat16a-h1", type: "hint", dependencies: [], title: "Lowest Common Denominator", text: "The first step is to find the lowest common denominator.", variabilization: {}}, {id: "solverat16a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["10a"], dependencies: ["solverat16a-h1"], title: "Lowest Common Denominator", text: "What is the lowest common denominator?", variabilization: {}}, {id: "solverat16a-h3", type: "hint", dependencies: ["solverat16a-h2"], title: "Distribute and multiply", text: "Distribute and multiply the lowest common denominator to all the terms.", variabilization: {}}, {id: "solverat16a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\left(10\\right)+\\left(4\\right) a=5a$$"], dependencies: ["solverat16a-h3"], title: "Distribute and multiply", text: "What is the result?", variabilization: {}}, {id: "solverat16a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$a=10$$"], dependencies: ["solverat16a-h4"], title: "Simple Algebra", text: "Solve for a. Please input the answer as $$variable=answer$$.", variabilization: {}}, {id: "solverat16a-h6", type: "hint", dependencies: ["solverat16a-h5"], title: "Double Check", text: "Plug answers for a back into the original equation to make the sure answer is correct and not undefined at any point.", variabilization: {}}, ]; export {hints};