var hints = [{id: "a427045gre2a-h1", type: "hint", dependencies: [], title: "Factor into Primes", text: "Factor each coefficient into primes. A prime number is a counting number greater than 1, whose only factors are 1 and itself. The first few prime numbers are: 2, 3, 5, 7, 11, 13, etc.", variabilization: {}}, {id: "a427045gre2a-h2", type: "hint", dependencies: ["a427045gre2a-h1"], title: "Factor First Number", text: "$$8=4\\times2$$ $$8=2\\times2\\times2$$", variabilization: {}}, {id: "a427045gre2a-h3", type: "hint", dependencies: ["a427045gre2a-h2"], title: "Factor Second Number", text: "$$18=9\\times2$$ $$18=3\\times3\\times2$$", variabilization: {}}, {id: "a427045gre2a-h4", type: "hint", dependencies: ["a427045gre2a-h2", "a427045gre2a-h3"], title: "Identify Common Factors in each Column", text: "$$8=2\\times2\\times2$$ $$18=3\\times3\\times2$$ 2 is shared by both numbers.", variabilization: {}}, {id: "a427045gre2a-h5", type: "hint", dependencies: ["a427045gre2a-h4"], title: "Multiply Common Factors", text: "$$GCF=2$$", variabilization: {}}, ]; export {hints};