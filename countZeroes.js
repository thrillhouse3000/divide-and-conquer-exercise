function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1

    if (arr[right] !== 0) {
        return 0
    }

    while(arr[left] !== 0) {
        let mid = Math.floor((left + right) / 2)
        let midVal = arr[mid]
        if (midVal !== 0) {
            left = mid + 1
        } else if (midVal === 0 && arr[mid - 1] !== 1) {
            left = mid - 1
        } else if (midVal === 0 && arr[mid - 1] === 1) {
            left = mid
        }
    }
    return (right + 1) - left
}

module.exports = countZeroes