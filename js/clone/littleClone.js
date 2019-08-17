function shallowClone(o) {
    const obj = {}
    for (let i in o) {
        obj[i] = o[i]
    }
    return obj;
}

//被克隆对象
const oldObj = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: { h: { i: 2 }}
};

const newObj = shallowClone(oldObj);
console.log(newObj.c.h, oldObj.c.h)
console.log(newObj.c.h === oldObj.c.h)

newObj.c.h.i = 'change'
console.log(newObj.c.h, oldObj.c.h)
//深拷贝
const newObj1 = JSON.parse(JSON.stringify(oldObj));
newObj1.c.h.i = 'change2'
console.log(newObj1.c.h, oldObj.c.h)

//缺点
//1.他无法实现对函数、正则对象、稀疏数组等特殊对象的克隆
// 2.会抛弃对象的constructor,所有的构造函数会指向Object
// 3.对象有循环引用,会报错