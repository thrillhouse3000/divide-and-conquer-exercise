function findRotatedIndex(arr, val) {
    let left = 0;
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)

    let leftVal = arr[left]
    let midVal = arr[mid]
    let rightVal = arr[right]

    if (val > midVal && val > rightVal) {
        right = mid 
    } else if (val > midVal && val < rightVal) {
        left = mid 
    } else if (val < midVal && val > leftVal) {
        right = mid 
    } else if (val < midVal && val < leftVal) {
        left = mid 
    } else if (val === midVal) {
        return mid
    }

    while(left <= right) {
        mid = Math.floor((left + right) / 2)
        leftVal = arr[left]
        midVal = arr[mid]
        rightVal = arr[right]

        if (val < midVal) {
            right = mid - 1
        } else if (val > midVal) {
            left = mid + 1
        } else {
            return mid
        }        
    }
    return -1
}

module.exports = findRotatedIndex