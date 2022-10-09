const MINUTES_OF_LIFE_WASTED_PER_CIGARETTES = 10
const NUMBER_OF_DAYS_IN_YEAR = 365
const MINUTES_IN_A_DAY = 1440

function roundDays(days) {
    return Math.round(days * 100) /100
}

function daysLost(numberOfCigarets, yearsSmoking) {
    const totalYearsSmoking = yearsSmoking * NUMBER_OF_DAYS_IN_YEAR
    const totalMinutesOfLifeLostSmokingPerDay = numberOfCigarets * MINUTES_OF_LIFE_WASTED_PER_CIGARETTES

    const minutesLost = totalMinutesOfLifeLostSmokingPerDay * totalYearsSmoking

    return roundDays(minutesLost / MINUTES_IN_A_DAY)
}

it('should calculate how many years lost', function() {
    expect(daysLost(5, 5)).toBe(63.37)
})