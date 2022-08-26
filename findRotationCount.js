function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)

    let leftVal = arr[left]
    let midVal = arr[mid]
    let rightVal = arr[right]

    if (midVal < leftVal && midVal < rightVal) {
        right = mid
    } else if (midVal > leftVal && midVal > rightVal) {
        left = mid
    } else {
        left = 0
        right = arr.length - 1
    }

    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        leftVal = arr[left]
        midVal = arr[mid]
        rightVal = arr[right]

        if (rightVal > midVal) {
            right = mid   
        } else {
            return right
        }    
    }
}

module.exports = findRotationCount