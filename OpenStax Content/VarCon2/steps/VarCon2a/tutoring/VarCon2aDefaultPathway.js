var hints = [{id: "VarCon2a-h1", type: "hint", dependencies: [], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "VarCon2a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3x=-12"], dependencies: ["VarCon2a-h1"], title: "Subtraction", text: "Subtract 4 from each side."}, {id: "VarCon2a-h3", type: "hint", dependencies: ["VarCon2a-h2"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "VarCon2a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["x=-4"], dependencies: ["VarCon2a-h3"], title: "Division", text: "Divide 3 from each side."}, {id: "VarCon2a-h5", type: "hint", dependencies: ["VarCon2a-h4"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "VarCon2a-h6", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["VarCon2a-h5"], title: "Verification", text: "Check whether $$\\left(3\\right) \\left(\\-4\\right)+\\left(4\\right)$$ equals -8.", choices: ["TRUE", "FALSE"]}, ]; export {hints};