function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1

    if (x < arr[left]) {
        return -1
    }

    while(left !== right) {
        let mid = Math.floor((left + right) / 2)
        let midVal = arr[mid]
        if (x < midVal) {
            right = mid - 1
        } else if (x > midVal) {
            left = mid + 1
        }
    }
    return arr[left]
}

module.exports = findFloor