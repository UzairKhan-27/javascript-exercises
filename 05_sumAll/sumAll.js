const sumAll = function(num1,num2) 
{
    let sum=0;
    if(num1<0 || num2<0 || !Number.isInteger(num1)||!Number.isInteger(num2))
        return "ERROR";
    if(num1>num2)
    {
        let temp = num2;
        num2=num1;
        num1=temp;
    }
    for(let i=num1;i<num2+1;i++)
    {
        sum+=i;
    }
    return sum;
};
console.log(sumAll(1,"4"));
// Do not edit below this line
module.exports = sumAll;
