const findRotationCount = require("./findRotationCount")

describe("findRotationCount function", () => {
    it("finds amount of times the index has been rotated", () => {
        expect(findRotationCount([15, 18, 2, 3, 6, 12])).toBe(2) 
        expect(findRotationCount([7, 9, 11, 12, 5])).toBe(4)
        expect(findRotationCount([7, 9, 11, 12, 15])).toBe(0)
    })
})