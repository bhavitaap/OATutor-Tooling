var hints = [{id: "a427045gre23a-h1", type: "hint", dependencies: [], title: "GCF of Terms", text: "Find the greatest common factor of all the terms of the polynomial.", variabilization: {}}, {id: "a427045gre23a-h2", type: "hint", dependencies: ["a427045gre23a-h1"], title: "Factor into Primes", text: "Factor $$4x$$ and 12 into primes. $$4x=2\\times2 x$$ $$12=2\\times2\\times3$$", variabilization: {}}, {id: "a427045gre23a-h3", type: "hint", dependencies: ["a427045gre23a-h2"], title: "Multiply Common Factors", text: "Multiply the terms shared by both expressions. $$GCF=2\\times2$$ $$GCF=4$$", variabilization: {}}, {id: "a427045gre23a-h4", type: "hint", dependencies: ["a427045gre23a-h3"], title: "Write each Term as a Product using GCF", text: "Rewrite $$4x$$ and 12 as products of their GCF, 4. $$4x+12$$ $$4x+4\\times3$$", variabilization: {}}, {id: "a427045gre23a-h5", type: "hint", dependencies: ["a427045gre23a-h4"], title: "Reverse Distributive Property", text: "Use the reverse Distributive Property to factor the expression. $$4\\left(x+3\\right)$$", variabilization: {}}, ]; export {hints};