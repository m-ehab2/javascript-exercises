const repeatString = function(string,int) {
    let x=string;
    let y=int;
    let m=x;
    if (y > 0) {
        for (let index = 0; index < y - 1; index++) {
            m = m + x;
        }
        return m;
    }
    else if(y===0){
        return "";
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
