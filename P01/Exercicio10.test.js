function getArea(width, height) {
    return width * height
}

function getLitersOfPaint(area) {
    return area / 2
}

it('should calculate area and liters of paint', function() {
    const area = getArea(3, 3)

    expect(area).toBe(9)
    expect(getLitersOfPaint(area)).toBe(4.5)
})