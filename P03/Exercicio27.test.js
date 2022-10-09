const AVG_FOR_APPROVAL = 7.00
const AVG_TO_FAIL = 4.90

function getAvgStudent(note1, note2) {
    return (note1 + note2) / 2
}

function checkStudentPerformance(note1, note2) {
    const avgStudent = getAvgStudent(note1, note2)

    if (avgStudent >= AVG_FOR_APPROVAL) {
        return "APROVADO!"
    }
    
    if(avgStudent <= AVG_TO_FAIL) {
        return "REPROVADO!"
    }
    
    return "RECUPERAÇÃO!"
}

it("check student performance", function() {
    expect(checkStudentPerformance(7, 7)).toBe("APROVADO!")

    expect(checkStudentPerformance(6.9, 6.9)).toBe("RECUPERAÇÃO!")

    expect(checkStudentPerformance(4.9, 4.9)).toBe("REPROVADO!")
})