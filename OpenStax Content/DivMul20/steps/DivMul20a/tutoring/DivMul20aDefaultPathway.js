var hints = [{id: "DivMul20a-h1", type: "hint", dependencies: [], title: "Simplification", text: "With these more complicated equations the first step is to simplify both sides of the equation as much as possible."}, {id: "DivMul20a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-4a+12-7=25"], dependencies: ["DivMul20a-h1"], title: "Simplification", text: "Simplify both sides of the equation using the distributive property first."}, {id: "DivMul20a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-4a=20"], dependencies: ["DivMul20a-h2"], title: "Simplification", text: "Simplify this equation with addition property."}, {id: "DivMul20a-h4", type: "hint", dependencies: ["DivMul20a-h3"], title: "Isolation", text: "Using multiplication property, division property etc. to isolate the variable."}, {id: "DivMul20a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["a=-5"], dependencies: ["DivMul20a-h4"], title: "Division", text: "Divide both sides by -4 to isolate a."}, {id: "DivMul20a-h6", type: "hint", dependencies: ["DivMul20a-h5"], title: "Verification", text: "Check whether the result is a solution of the equation."}, {id: "DivMul20a-h7", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["True"], dependencies: ["DivMul20a-h6"], title: "Verification", text: "Check whether $$-\\left(4\\right) \\left(\\left(\\-5\\right)-\\left(3\\right)\\right)-\\left(7\\right)$$ equals 25.", choices: ["TRUE", "FALSE"]}, ]; export {hints};