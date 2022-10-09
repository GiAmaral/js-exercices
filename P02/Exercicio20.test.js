function checkIfItsEven(number) {
    const isEven = number % 2 == 0

   if (isEven) {
    return `O número ${number} é PAR!`
   }

   return `O número ${number} é íMPAR!`
}

it("check if it's pair or odd", function() {
    expect(checkIfItsEven(146)).toBe("O número 146 é PAR!")

    expect(checkIfItsEven(337)).toBe("O número 337 é íMPAR!")
})