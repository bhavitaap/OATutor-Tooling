var hints = [{id: "DivMul25a-h1", type: "hint", dependencies: [], title: "Translation", text: "The first step is translating the sentences into an equation."}, {id: "DivMul25a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["117=-13z"], dependencies: ["DivMul25a-h1"], title: "Translation", text: "Translate it into an equation."}, {id: "DivMul25a-h3", type: "hint", dependencies: ["DivMul25a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "DivMul25a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["z=-9"], dependencies: ["DivMul25a-h3"], title: "Division", text: "Divide both sides by -13."}, {id: "DivMul25a-h5", type: "hint", dependencies: ["DivMul25a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul25a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["DivMul25a-h5"], title: "Verification", text: "Check whether 117 equals $$-\\left(13\\right) \\left(\\-9\\right)$$.", choices: ["TRUE", "FALSE"]}, ]; export {hints};