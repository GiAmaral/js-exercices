function discauntPrice(price) {
  return Number(price) - (Number(price) * 0.05)
}

it('should discaunt', function() {
  expect(discauntPrice(150)).toBe(142.50)
})