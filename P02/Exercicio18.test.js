const CURRENT_YEAR = new Date().getFullYear()
const AGE_ALLOWED_TO_VOTE = 16

function canVote(yearOfBirth) {
    const personsAge = CURRENT_YEAR - yearOfBirth

    if (personsAge >= AGE_ALLOWED_TO_VOTE) {
        return `Idade: ${personsAge}, pode votar!`
    }

    return `Idade: ${personsAge}, não pode votar!`
}

it('should calculte age', function() {
    expect(canVote(1989)).toBe(`Idade: 33, pode votar!`)

    expect(canVote(2007)).toBe(`Idade: 15, não pode votar!`)
})