// 无序数组中 找出第K大的数字


//排序
//[k]
//[1, 4, 9, 2, 6, 10] 2

var findKth = function(nums, k) {
    return nums.sort((a ,b) => {
        return b - a
    })[k-1]
}

console.log(findKth([1, 4, 9, 2, 6, 10], 2 ))