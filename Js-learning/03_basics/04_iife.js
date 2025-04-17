//  IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB Connected`);
})();

// (Your function)()   //IIFE syntax

( (name) => {
    console.log(`DB Connected Two ${name}`);
} )("Mayank")