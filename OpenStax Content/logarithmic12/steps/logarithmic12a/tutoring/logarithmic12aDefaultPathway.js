var hints = [{id: "logarithmic12a-h1", type: "hint", dependencies: [], title: "Change-of-Base Formula", text: "The change-of-base formula can be used to evaluate a logarithm with any base. \\n For any positive real numbers M,b, and n, where $$n!=1$$ and $$b!=1$$, log(b,M)=log(n,M)/log(n,b). \\n \\n 1) Determine the new base n, remembering that the common log, log(x), has base 10, and the natural log, ln(x), has base e. \\n 2) Rewrite the log as a quotient using the change-of-base formula \\n a) The numerator of the quotient will be a logarithm with base n and argument M. \\n b) The denominator of the quotient will be a logarithm with base n and argument b. \\n", variabilization: {}}, {id: "logarithmic12a-h2", type: "hint", dependencies: ["logarithmic12a-h1"], title: "New Base", text: "Observe that in the questions, both a and b are of base 5. Thus, we would want to use the change the base to 5 so that we can express the logarithmic expressions in terms of a and b.", variabilization: {}}, {id: "logarithmic12a-h3", type: "hint", dependencies: ["logarithmic12a-h2"], title: "Change-of-Base", text: "What is the expression after changing the base to 5? Recall that for any positive real numbers M,b, and n, where $$n!=1$$ and $$b!=1$$, log(b,M)=log(n,M)/log(n,b).", variabilization: {}}, {id: "logarithmic12a-h4", type: "hint", dependencies: ["logarithmic12a-h3"], title: "Apply the Quotient Rule for Logarithms", text: "We observe that the quotient rule can be applied to the quotient $$\\frac{6}{11}$$. Applying the quotient rule to the $$log(5,\\frac{6}{11})$$, what would the new expression be?", variabilization: {}}, {id: "logarithmic12a-h5", type: "hint", dependencies: ["logarithmic12a-h4"], title: "Substitution", text: "Substitute $$a=log(5,6)$$ and $$b=log(5,11)$$ into the expression. What is the expression now?", variabilization: {}}, ]; export {hints};