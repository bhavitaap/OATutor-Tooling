var hints = [{id: "SolvingRats8a-h1", type: "hint", dependencies: [], title: "Setting up the equation", text: "Set up the equation first by setting t as the time it takes when the two parties work together.", variabilization: {}}, {id: "SolvingRats8a-h2", type: "hint", dependencies: ["SolvingRats8a-h1"], title: "Setting up the equation", text: "Next, understand how the two parties relate to each other.", variabilization: {}}, {id: "SolvingRats8a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{1}{7}+\\frac{1}{3}=\\frac{1}{t}$$"], dependencies: ["SolvingRats8a-h2"], title: "Setting up the equation", text: "What is the relationship between the two parties?", variabilization: {}}, {id: "SolvingRats8a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$t=$$ $$\\frac{21}{10}$$"], dependencies: ["SolvingRats8a-h3"], title: "Solving the equation", text: "Solve for t.", variabilization: {}}, {id: "SolvingRats8a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2 hours 6 minutes"], dependencies: ["SolvingRats8a-h4"], title: "Coverting into time", text: "What is t in terms of hours and minutes?", variabilization: {}}, {id: "SolvingRats8a-h6", type: "hint", dependencies: ["SolvingRats8a-h5"], title: "Double-Checking", text: "Double check that the answer makes sense in terms of the context of the question.", variabilization: {}}, ]; export {hints};