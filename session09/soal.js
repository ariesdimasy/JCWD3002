function countAlphabet(str){
    let result = ''
    let alpha = str[0] // a
    let alphaCounter = 1
    for(let i = 1; i <= str.length; i++){
       //console.log(alpha+' '+str[i])
       // g != u
        if(alpha != str[i]) { // 1 str[1] a 
            console.log(str[i]) // u
            // 2 == 1 
            // kondisi kalau alphacounter yg terakhir 1 
            // 1 == 1
            if(alphaCounter == 1){
                alphaCounter = ''
            }
            // pemasangan
            //          g +  '
            result += alpha+alphaCounter // a2B3
            console.log(result)
            
            // set ulang
            alpha = str[i] // g
            alphaCounter = 1
        } else {
            alphaCounter+=1 // 2+1  = 3
        }
    }

    return result
}

console.log(countAlphabet("aaBBBguuhhhhiiiia"))

// "a2B3gu2h4i2a"