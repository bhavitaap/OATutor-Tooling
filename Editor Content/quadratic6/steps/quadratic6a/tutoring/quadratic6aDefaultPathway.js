var hints = [{id: "quadratic6a-h1", type: "hint", dependencies: [], title: "Identify what we are looking for.", text: "We are looking for the length of the driveway.", variabilization: {}}, {id: "quadratic6a-h2", type: "hint", dependencies: ["quadratic6a-h1"], title: "Name what we are looking for.", text: "Let $$x=width$$ of the driveway, $$5+3x=length$$ of the driveway", variabilization: {}}, {id: "quadratic6a-h3", type: "hint", dependencies: ["quadratic6a-h2"], title: "Translate into an equation.", text: "We know the area, and we could use the formula for the area of a rectangle to solve for x: $$x \\left(5+3x\\right)=350$$", variabilization: {}}, {id: "quadratic6a-h4", type: "hint", dependencies: ["quadratic6a-h3"], title: "Rewrite in standard form.", text: "$$3x^2+5x-350=0$$", variabilization: {}}, {id: "quadratic6a-h5", type: "hint", dependencies: ["quadratic6a-h4"], title: "Solve the equation using the Quadratic Formula.", text: "Idenfity the a, b, c value: $$a=3$$, $$b=5$$ $$c=-350$$.", variabilization: {}}, {id: "quadratic6a-h6", type: "hint", dependencies: ["quadratic6a-h5"], title: "Solve the equation.", text: "We could solve the equation using the Quadratic Formula, h=(-b~sqrt(b**2-4*a*c))/(2*a).", variabilization: {}}, {id: "quadratic6a-h7", type: "hint", dependencies: ["quadratic6a-h6"], title: "Solve for x", text: "Simplify the equation and solve for x", variabilization: {}}, {id: "quadratic6a-h8", type: "hint", dependencies: ["quadratic6a-h7"], title: "Solve for $$5+3x$$", text: "Using the value of x to solve for $$5+3x$$", variabilization: {}}, ]; export {hints};