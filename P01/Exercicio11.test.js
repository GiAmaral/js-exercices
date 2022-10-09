function delta(valueA, valueB, valueC) {
    return (valueB ** 2) - (4 * valueA * valueC)
}

it('should calculate delta', function() {
    expect(delta(2, 4, 1)).toBe(8)

    expect(delta(4, 8, 3)).toBe(16)
})