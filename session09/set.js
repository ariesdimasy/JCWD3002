const fruits = ['mera','moku','hito','mochi','mera'];

const setFruits = new Set(fruits)

console.log(setFruits)

setFruits.add('magu')
setFruits.add('hana')
setFruits.add('buddha')
setFruits.add('hito')
console.log(setFruits)
setFruits.delete('buddha')
console.log(setFruits.has('hana'))
console.log(setFruits)