const armstrongNum = (x) => {
    if( x < 0){
        console.log("Only postive numbers are allowed.");
    }else{
        const str = x.toString();
        const digits = str.length;
        let num = str; // default
        let sum = 0; // default
        while(num > 0){
            let lastDigit =  num % 10; // getting last digit 
            sum += Math.pow(lastDigit, digits);
            num = Math.floor(num / 10); // removing last digit
        };
        if(x ==  sum){
            console.log(`${x} is an Armstrong number, as ${x} = ${sum}`);
        }else{
            console.log(`${x} is not an Armstrong number, as ${x} ≠ ${sum}`);
        };
    };
};
armstrongNum(54741)