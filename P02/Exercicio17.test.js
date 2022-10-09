const ALLOWED_SPEED = 80
const PRICE_OF_TRAFFIC_TICKET_PER_KM = 5

function formatToBrl(value) {
    return new Intl.NumberFormat('pt-BR', {currency: 'BRL', style: 'currency'}).format(value).replace(String.fromCharCode(160), " ")
}

function calculateVehicleSpeed(speed) {
    if (speed > ALLOWED_SPEED) {
        return speed - ALLOWED_SPEED
    }

    return 0
}

function calculatePriceTrafficTicket(speed) {
    const ticketValue = calculateVehicleSpeed(speed) * PRICE_OF_TRAFFIC_TICKET_PER_KM
    const formattedTicketValue = formatToBrl(ticketValue)

    if (ticketValue == 0) {
        return "Velocidade no limite permitido!"
    }
    return `Você foi multado! Velocidade registrada ${speed}Km/h em uma via de ${ALLOWED_SPEED}Km/h. O valor da sua multa é de ${formattedTicketValue}`
}

it('should calculate the price of traffic ticket', function() {
    expect(calculatePriceTrafficTicket(110)).toBe("Você foi multado! Velocidade registrada 110Km/h em uma via de 80Km/h. O valor da sua multa é de R$ 150,00")

    expect(calculatePriceTrafficTicket(79)).toBe("Velocidade no limite permitido!")
})