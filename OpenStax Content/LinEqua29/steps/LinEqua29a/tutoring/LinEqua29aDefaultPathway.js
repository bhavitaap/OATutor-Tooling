var hints = [{id: "LinEqua29a-h1", type: "hint", dependencies: [], title: "Find the slope", text: "First, we should write the given equation in slope-intercept form to find the slope."}, {id: "LinEqua29a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=-(5/3)x+(1/3)"], dependencies: ["LinEqua29a-h1"], title: "Slope-intercept form", text: "What is the slope-intercept form of equation 5x+3y=1?"}, {id: "LinEqua29a-h3", type: "hint", dependencies: ["LinEqua29a-h2"], title: "Relationship between slopes", text: "In order to write the equation of a line, we need to calculate its slope. Since the line is parallel to $$5y+3y=1$$ they have the same slope."}, {id: "LinEqua29a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-5/3"], dependencies: ["LinEqua29a-h3"], title: "Slope", text: "What is the slope of the target line?"}, {id: "LinEqua29a-h5", type: "hint", dependencies: ["LinEqua29a-h4"], title: "Point-slope formula", text: "Given one point and the slope, the point-slope formula will lead to the equation of a line: y-y_1=m(x-x_1)."}, {id: "LinEqua29a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y-5=-5/3(x-3)"], dependencies: ["LinEqua29a-h5"], title: "Substitute", text: "Given the slope $$\\frac{-5}{3}$$ and the point (3,5), what equation can we get using the point-slope formula?"}, {id: "LinEqua29a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["y=-(5/3)x+10"], dependencies: ["LinEqua29a-h6"], title: "Simplification", text: "What is the point-intercept form of equation y-5=-5/3(x-3)?"}, ]; export {hints};