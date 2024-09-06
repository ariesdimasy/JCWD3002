let map1 = new Map()

map1.set('daud','001')
map1.set('harun','002')

console.log(map1)

for(let [key,value] of map1){
    console.log(`${key} : ${value}`)
}