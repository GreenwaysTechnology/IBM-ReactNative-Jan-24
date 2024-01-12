//pure function Rule A:
//if function receives input, the function returns the input without any mutation...

//is this function is pure function or not: Pure
function Hello(message) {
    return message;
}
console.log(Hello('hello'))

//is this function is pure function or not: Impure function.
//The function modifies the input parameter
function Hai(message) {
    return message.toUpperCase();
}
console.log(Hai('hai'))