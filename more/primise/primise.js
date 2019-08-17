var A1 = new Promise( function (resolve, reject) {
    setTimeout(resolve, 3000, 'A1执行3s,')
})
var A2 = new Promise( function (resolve, reject) {
    setTimeout(resolve, 5000, 'A2执行了5s,')
})
Promise.all([A1, A2]).then (function(values) {
    console.log(values +"B进程执行了")
})