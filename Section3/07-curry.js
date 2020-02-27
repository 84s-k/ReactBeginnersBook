// const multi = (n, m) => n * m;
// console.log(multi(2, 4));

const curriedMulti = n => {
    return m => n * m;
}
console.log(curriedMulti(2)(4));

const simpleCurriedMulti = n => m => n * m;
console.log(simpleCurriedMulti(2)(4));

const multi = n => m => n * m;
console.log(multi(3)(5));

const triple = multi(3);
console.log(triple(5));