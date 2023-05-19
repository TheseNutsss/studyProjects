function randomInt(){
    let randInt = Math.round(Math.random()*100)
    return randInt
}
function a(){
    const asteroid = {"x": randomInt(), "y": randomInt(), "z": randomInt()}
    return asteroid
}
function z(){
    const zond = {"x": randomInt(), "y": randomInt(), "z": randomInt()}
    return zond
}
const probes = {
    "count": randomInt(),
    "coordinates": []
}
for(i=0; i<probes.count; i++){
    probes.coordinates.push(z())
}
function distance(a, z){
    let az = Math.round(Math.sqrt(Math.pow((z.x - a.x), 2) + Math.pow((z.y - a.y), 2) + Math.pow((z.z - a.z), 2)))
    return az
}
const asteroid = a()
for(i=0; i<probes.count; i++){
    distance(asteroid, probes.coordinates[i])
}
jsonOutput = JSON.stringify({"result": {"location": asteroid, probes}})
console.log(jsonOutput)

