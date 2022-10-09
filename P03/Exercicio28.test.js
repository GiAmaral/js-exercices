const LAND_SIZE_POPULAR = 100
const LAND_SIZE_VIP = 500

function getLandSize(landWidth, landLength) {
    return landWidth * landLength
}

function checkStatusOfLand(landWidth, landLength) {
    const landSize = getLandSize(landWidth, landLength)

    if (landSize < LAND_SIZE_POPULAR) {
        return "TERRENO POPULAR"
    }
    
    if (landSize > LAND_SIZE_VIP) {
        return "TERRENO VIP"
    }

    return "TERRENO MASTER"
}

it("check status of land", function() {
    expect(checkStatusOfLand(12, 30)).toBe("TERRENO MASTER")

    expect(checkStatusOfLand(9, 10)).toBe("TERRENO POPULAR")

    expect(checkStatusOfLand(15, 40)).toBe("TERRENO VIP")
})