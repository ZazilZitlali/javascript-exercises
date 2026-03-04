const removeFromArray = function(array, num, ...other) {
    for (let i = 0; i < array.length; i++){
        let index = array[i];
        if (index === num){
            array.splice(i, 1);
            i--;
        } else if (other.includes(index)){
            array.splice(i, 1);
            i--;
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
