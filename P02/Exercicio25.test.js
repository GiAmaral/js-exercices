function checkIfItIsTriangle(side1, side2, side3) {
    if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
        return "É TRIÂNGULO!"
    }

    return "NÃO É TRIÂNGULO!"
}

it("check if it is triangle", function() {
    expect(checkIfItIsTriangle(2, 4, 3)).toBe("É TRIÂNGULO!")

    expect(checkIfItIsTriangle(5, 20, 12)).toBe("NÃO É TRIÂNGULO!")
})