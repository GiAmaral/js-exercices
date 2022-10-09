const DISCOUNT_FOR_WOMEN = 0.13
const DISCOUNT_FOR_MEN = 0.05

function roundValue(value) {
    return Math.round(value * 100) / 100
}

function calcDiscount(personGender, purchaseValue) {
    if (personGender == "Feminino") {
        return roundValue(purchaseValue - (purchaseValue * DISCOUNT_FOR_WOMEN))
    }

    return roundValue(purchaseValue - (purchaseValue * DISCOUNT_FOR_MEN))
}

it("calculate discount", function() {
    expect(calcDiscount("Feminino", 347.51)).toBe(302.33)

    expect(calcDiscount("Masculino", 214.98)).toBe(204.23)
})