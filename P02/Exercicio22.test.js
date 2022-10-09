const CURRENT_YEAR = new Date().getFullYear()
const AGE_REQUIRED_FOR_MILITARY_ENLISTMENT = 18

function getPersonsAge(yearBirth) {
    return CURRENT_YEAR - yearBirth
}

function calcYearsPassingOrMissing(yearBirth) {
    const personsAge = getPersonsAge(yearBirth)

    return personsAge - AGE_REQUIRED_FOR_MILITARY_ENLISTMENT
}

function checkTheStatusOfMilitaryEnlistment(yearBirth) {
    const personsAge = getPersonsAge(yearBirth)
    const statusOfYearsPassingOrMissing = calcYearsPassingOrMissing(yearBirth)

    if (personsAge >= AGE_REQUIRED_FOR_MILITARY_ENLISTMENT) {
        return `Já se passou ${statusOfYearsPassingOrMissing} anos de alistamento militar.`
    }

        return `Falta ${-statusOfYearsPassingOrMissing} anos para você se alistar.`
    }

it("check the status of military enlistment", function() {
    expect(checkTheStatusOfMilitaryEnlistment(2003)).toBe("Já se passou 1 anos de alistamento militar.")

    expect(checkTheStatusOfMilitaryEnlistment(2010)).toBe("Falta 6 anos para você se alistar.")
})