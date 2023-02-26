/* ------------------------------------------------------
   Tribonacci Sequence (6 kyu)
   https://www.codewars.com/kata/556deca17c58da83c00002db 
   ------------------------------------------------------*/

function tribonacci(signature, n) {
    // Where n = 0, the signature array returns [];
    if (n === 0) {
        return [];
    // Where n <= 3, the signature array returns the selected n starting from the first array item of signature. 
    } else if (n <= 3) {
        return signature.slice(0, n);
    } else {
    /* Where n > 3, signature includes its original array items,
       and pushes a total of n newNumbers into signature. */
        for (let i = 3; i < n; i++) {
            const newNumber = signature[i - 1] + signature[i - 2] + signature[i - 3];
            signature.push(newNumber);
        };
    }
    return signature;
};
