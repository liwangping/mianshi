// 具体算法描述如下：

// <1>.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
// <2>.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
// <3>.针对所有的元素重复以上的步骤，除了最后一个；
// <4>.重复步骤1~3，直到排序完成。

function bubbleSort(arr) {
    var len  = arr.length;
    for( let i = 0; i < len; i++){
        for (let j = 0; j < len - 1; j++ ){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    return arr
}

//优化



var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(bubbleSort(arr))