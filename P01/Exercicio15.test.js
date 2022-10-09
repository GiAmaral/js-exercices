const HOURS = 8
const HOURS_PRICE = 25.00
const WORKED_DAY_PRICE = HOURS * HOURS_PRICE

function calculateSalary(workedDays) {
    return   workedDays * WORKED_DAY_PRICE
}

it('should calculate salary', function() {
    expect(calculateSalary(21)).toBe(4200.00)
})