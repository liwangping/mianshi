function chicken() {
    let num = new Array();
    for(let i = 0; i < 100 ; i++ ){
        num[i] = 0
    }
    //随机数大于0.5 往右，小于0.5 往左
    // j = 1
    if(Math.random() > 0.5){
        num[2]++
    }else {
        num[100]++
    }
    //j = 100
    if(Math.random() > 0.5){
        num[1]++
    }else {
        num[99]++
    }
    for (let j = 2; j < 100; j++ ){
        if (Math.random() > 0.5){
            num[j + 1]++
        }else{
            num[j - 1]++
        }
    } 
    let newStr = num.filter(item => {
        if(item > 0)
        return item
    })
    console.log(100 - newStr.length)
}


chicken()