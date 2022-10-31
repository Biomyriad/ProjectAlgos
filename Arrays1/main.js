function pushFront(arr, val) {
    // Destructuring 
    console.log([val,...arr])

    //Shifting
    arr.unshift(val)
    console.log(arr)

    return [val,...arr]
}

console.log('--- Push Front ---')
pushFront([5,7,2,3], 8)
pushFront([99], 7)

function popFront(arr) {

    var val
    val = arr[arr.length -1]
    arr.length--
    console.log(val + " [" + arr + "]")

    return arr.pop()

}

console.log('--- Pop Front ---')
popFront([0,5,10,15])
popFront([4,5,7,9])

function insertAt(arr,idx,val) {

    var nArr = []
    var off = 0
    for(var i = 0; i < arr.length; i++) {
        if(i == idx) {off++, nArr[i] = val}
        nArr[i + off] = arr[i]
    }
    console.log(nArr)
}

console.log('--- Insert At ---')
insertAt([100,200,5], 2, 311)
insertAt([9,33,7], 1, 42)