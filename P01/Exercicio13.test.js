function newSalary(salary) {
  return salary + (salary * 0.15)
}

it('show new salary', function() {
  expect(newSalary(3800.00)).toBe(4370.00)
})