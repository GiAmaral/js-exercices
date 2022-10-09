const PRICE_PER_KM_UP_TO_200_KM_AWAY = 0.50
const PRICE_PER_KM_OVER_200_KM_AWAY = 0.45
const DISTANCE_KM_LIMIT = 200

function calcTicketPrice(kmTravelled) {
    if (kmTravelled < DISTANCE_KM_LIMIT) {
        return kmTravelled * PRICE_PER_KM_UP_TO_200_KM_AWAY
    }

    return kmTravelled * PRICE_PER_KM_OVER_200_KM_AWAY
}

it("calculate the ticket price", function() {
    expect(calcTicketPrice(200)).toBe(90)

    expect(calcTicketPrice(199)).toBe(99.50)
})