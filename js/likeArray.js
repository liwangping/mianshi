// 类数组调用数组方法

// 如果类数组就是任性的想用数组的方法怎么办呢？

// 既然无法直接调用，我们可以用 Function.call 间接调用：a

var arrayLike = {0: 'name', 1: 'age', 2: 'sex', lenght: 3}

Array.prototype.join.call(arrayLike, '&'); // name&age&sex

Array.prototype.slice.call(arrayLike, 0); // ["name", "age", "sex"] 
// slice可以做到类数组转数组

Array.prototype.map.call(arrayLike, function(item){
    return item.toUpperCase();
}); 
// ["NAME", "AGE", "SEX"]

// 传入的参数，实参和 arguments 的值会共享，当没有传入时，实参与 arguments 值不会共享

// 除此之外，以上是在非严格模式下，如果是在严格模式下，实参和 arguments 是不会共享的
