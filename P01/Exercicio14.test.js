const PRICE_PER_KM_TRAVELED = 0.20
const PRICE_PER_RENTED_DAYS = 90.00

function calculateKmTraveled(kmTraveled) {
  return kmTraveled * PRICE_PER_KM_TRAVELED
}

function calculateRentedDays(rentedDays) {
  return rentedDays * PRICE_PER_RENTED_DAYS
}

function roundCents(value) {
  return Math.round(value * 100) / 100
}

function rentCar(kmTraveled, rentedDays) {
  let kmtraveledPrice = calculateKmTraveled(kmTraveled)
  let rentedDaysPrice = calculateRentedDays(rentedDays)

  return roundCents(kmtraveledPrice + rentedDaysPrice)
}

it('should calculate a cost to rent a car', function() {
  expect(rentCar(1, 1)).toBe(90.20)

  expect(rentCar(2547.91, 7)).toBe(1139.58)
})