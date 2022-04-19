const FizzBuzz = (num) => {
    if (num === 0) return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
};

function foo() {
    return 'Bla';
}
function foo2() {
    return 'Bla';
}

export default FizzBuzz;
