const findFloor = require("./findFloor")

describe("findFloor function", () => {
    it("finds the floor of x, or returns -1 if it doesn't exist", () => {
        expect(findFloor([1,2,8,10,10,12,19], 9)).toBe(8) 
        expect(findFloor([1,2,8,10,10,12,19], 20)).toBe(19)
        expect(findFloor([1,2,8,10,10,12,19], 0)).toBe(-1) 
    })
})