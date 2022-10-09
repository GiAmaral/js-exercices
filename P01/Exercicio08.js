let distance = prompt("Digite a ditância em metros:")

let distanceKm = Number(distance) / 1000
let distanceHm = Number(distance) / 100
let distanceDam = Number(distance) / 10
let distanceDm = Number(distance) * 10
let distanceCm = Number(distance) * 100
let distanceMm = Number(distance) * 1000

alert(`A distância de ${distance} corresponde a:
${distanceKm}Km
${distanceHm}Hm
${distanceDam}Dam
${distanceDm}dm
${distanceCm}cm
${distanceMm}mm`)