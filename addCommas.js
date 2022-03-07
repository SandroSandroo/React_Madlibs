

function addCommas(num) {

    let str = "";
    //convert to  arr and reverse with value of num
    let arrNum = num.toString().split("").reverse();

    // start converting to a string a
    for (let i = arrNum.length-1; i >= 0; i--){
         str+=arrNum[i]

         //add comma if it's fit
         if(i % 3 === 0 && i !== 0 && arrNum[i] !== "." && arrNum[i] !== "-"){
            str+=","
        }
    }
    return str
    
}

module.exports = addCommas;