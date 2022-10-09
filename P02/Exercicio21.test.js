function checkIfItISLeapYear(year) {
    const divisableByFour = year % 4 == 0
    const divisableByHundred = year % 100 == 0
    const divisableByFourHundred = year % 400 == 0

    if (divisableByFour && divisableByHundred && divisableByFourHundred) {
        return `O ano ${year} É BISSEXTO!`
    }

    return `O ano ${year} NÃO É BISSEXTO!`
}

it("check if it is a leap year", function() {
    expect(checkIfItISLeapYear(2000)).toBe("O ano 2000 É BISSEXTO!")

    expect(checkIfItISLeapYear(2600)).toBe("O ano 2600 NÃO É BISSEXTO!")
})