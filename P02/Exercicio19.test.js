const APPROVAL_AVG = 7.00

function getAvgStudent(note01, note02) {
    return ((note01 + note02) / 2).toFixed(2)
}

function checkStudentPerformance(nameStudent, note01, note02) {
    const avgStudent = getAvgStudent(note01, note02)

    if (avgStudent >= APPROVAL_AVG) {
        return `Parabéns ${nameStudent}! Sua média foi de ${avgStudent} pontos. Você está acima da média.`   
    }

    return `Não foi dessa vez ${nameStudent}! Sua média foi de ${avgStudent} pontos. Você está abaixo da média.`
}

it("check the student's performance", function() {
    expect(checkStudentPerformance("Gisele", 6.5, 7.8)).toBe("Parabéns Gisele! Sua média foi de 7.15 pontos. Você está acima da média.")

    expect(checkStudentPerformance("Rodrigo", 5.2, 4.4)).toBe("Não foi dessa vez Rodrigo! Sua média foi de 4.80 pontos. Você está abaixo da média.")
})