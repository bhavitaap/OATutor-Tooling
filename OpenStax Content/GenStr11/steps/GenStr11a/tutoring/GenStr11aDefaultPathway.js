var hints = [{id: "GenStr11a-h1", type: "hint", dependencies: [], title: "Simplification", text: "Simplify each side of the equation as much as possible."}, {id: "GenStr11a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2u+1=7-u"], dependencies: ["GenStr11a-h1"], title: "Simplification", text: "Use the distributive property to simplify each side of the equation."}, {id: "GenStr11a-h3", type: "hint", dependencies: ["GenStr11a-h2"], title: "Variable Terms", text: "Collect all variable terms on the left side of the equation."}, {id: "GenStr11a-h4", type: "hint", dependencies: ["GenStr11a-h3"], title: "Addition property of equality", text: "When you add the same quantity to both sides of an equation, you still have equality."}, {id: "GenStr11a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3u+1=7"], dependencies: ["GenStr11a-h4"], title: "Addition", text: "Add u to each side of the equation."}, {id: "GenStr11a-h6", type: "hint", dependencies: ["GenStr11a-h5"], title: "Constant Terms", text: "Collect all constant terms on the right side of the equation."}, {id: "GenStr11a-h7", type: "hint", dependencies: ["GenStr11a-h6"], title: "Subtraction property of equality", text: "When you subtract the same quantity from both sides of an equation, you still have equality."}, {id: "GenStr11a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["3u=6"], dependencies: ["GenStr11a-h7"], title: "Subtraction", text: "Subtract 1 from each side."}, {id: "GenStr11a-h9", type: "hint", dependencies: ["GenStr11a-h8"], title: "Division property of equality", text: "When you divide both sides of an equation by any non-zero number, you still have equality."}, {id: "GenStr11a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["u=2"], dependencies: ["GenStr11a-h9"], title: "Division", text: "Divide 3 from each side."}, {id: "GenStr11a-h11", type: "hint", dependencies: ["GenStr11a-h10"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "GenStr11a-h12", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["GenStr11a-h11"], title: "Verification", text: "Check whether $$\\frac{1}{3} \\left(\\left(6\\right) \\left(2\\right)+\\left(3\\right)\\right)$$ equals 7-2.", choices: ["TRUE", "FALSE"]}, ]; export {hints};