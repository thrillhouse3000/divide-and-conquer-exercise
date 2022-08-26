function sortedFrequency(arr, val) {
    let left = 0;
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let midVal = arr[mid]
        if (val > midVal) {
            left = mid + 1
        } else if (val < midVal) {
            right = mid - 1
        } else if (val === midVal && arr[left] !== val && arr[right] !== val) {
            if (arr[left] !== val && val > arr[left]) {
                left += 1
            }
            if (arr[right] !== val && val < arr[right]) {
                right -= 1
            }
        } else if (left === right) {
            return 1
        } else {
            return right - left
        }
    }
    return -1
}

module.exports = sortedFrequency