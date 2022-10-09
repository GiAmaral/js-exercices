function compareNumbers(number1, number2) {
    if (number1 > number2) {
        return "O primeiro número é maior."
    }
    
    if (number1 < number2) {
        return "O segundo número é maior." 
    }

    return "Os dois números são iguais."
}

it("compare two numbers", function() {
    expect(compareNumbers(9, 15)).toBe("O segundo número é maior.")

    expect(compareNumbers(33, 27)).toBe("O primeiro número é maior.")

    expect(compareNumbers(16, 16)).toBe("Os dois números são iguais.")
})