const removeFromArray = function(array,...args) {
    // let index=array.indexOf(numberToRemove);
    for(let i=0;i<array.length;i++)
    {
        args.forEach()
        {
        if(array[i]===arg)
        {
            array.splice(i,1);
            i--;
        }
        }
    }
    return array;    
};

// Do not edit below this line
module.exports = removeFromArray;
