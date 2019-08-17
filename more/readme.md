## 什么是闭包

## new方法的实现原理

```
function _new(){
      let target = {}
      let [constructor,...args] = [...arguments]
      // 执行原型连接 
      target.__proto__ = constructor.prototype
      // 执行构造函数，将函数的属性或者方法添加到创建的空对象上
      let result = constructor.apply(target,args)
      if(result && (typeof (result) === 'object' || typeof (result) === 'function' ) ){
        return result
      }
      return target
    }
```

## q4闭包
    闭包的原理：有权限访问其他函数的作用域的函数

## q5数组去重
    Set typeOf includes map reduce

## 


