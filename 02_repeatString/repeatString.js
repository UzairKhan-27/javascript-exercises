// const repeatString = function("hey",3) {

// };
function repeatString(string,number)
{
    if(number<0)
        return "ERROR";
    let stringConcat=""
    for(let i=0;i<number;i++)
    {
        stringConcat = stringConcat+string; 
    }
    return stringConcat;
}
console.log(repeatString("bye",10));
// Do not edit below this line
module.exports = repeatString;
