function capitalize(stringInput){
    let capitalString = stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
    return capitalString;
}

function reverseString(stringInput){
    let splitStringArray = stringInput.split("");
    let reversedArray = splitStringArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString;
}

class Calculator {
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
        this.result;
    }

    add(){
        let check = this.checkNums();
        if(check !== undefined){
            return check;
        }
        this.result = this.num1 + this.num2
        return this.result;
    }

    subtract(){
        let check = this.checkNums();
        if(check !== undefined){
            return check;
        }
        this.result = this.num1 - this.num2
        return this.result;
    }

    divide(){
        let check = this.checkNums();
        if(check !== undefined){
            return check;
        }
        this.result = this.num1 / this.num2
        return this.result;
    }

    multiply(){
        let check = this.checkNums();
        if(check !== undefined){
            return check;
        }
        this.result = this.num1 * this.num2
        return this.result;
    }

    checkNums(){
        if(typeof(this.num1) !== "number"){
            return this.num1 + " is not a number!";
        } 
        if(typeof(this.num2) !== "number"){
            return this.num2 + " is not a number!";
        }
    }
}

export {capitalize, reverseString, Calculator}