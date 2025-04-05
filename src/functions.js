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

function characterShift(character, shiftFactor){
    let characterCode = character.charCodeAt(0);

    if(character.charCodeAt(0) > 96 && character.charCodeAt(0) < 123){
        characterCode += shiftFactor;
        while(characterCode > 122){
            characterCode = characterCode - 122;
            characterCode += 96;
        }
    }else if(character.charCodeAt(0) > 64 && character.charCodeAt(0) < 91){
        characterCode += shiftFactor;
        while(characterCode > 90){
            characterCode = characterCode - 90;
            characterCode += 64;
        }
    }

    return String.fromCharCode(characterCode);
}

function caesarCipher(stringInput, shiftFactor){
    let toCipher = stringInput.split("");
    let cipheredString = "";

    toCipher.forEach(element => {
        element = characterShift(element,shiftFactor);
        cipheredString += element;
    });
    
    return cipheredString;
}

function analyzeArray(array){
    if(array instanceof Array){
        let check;
        array.forEach(element => {
            if(typeof(element) !== 'number'){
                check = "Array contains an element that's not a number!"
            }
        });

        if(check !== undefined){
            return check;
        }

        let average = 0;

        for(let i=0;i<array.length;i++){
            average = average + array[i];
        }
        average = average / array.length;

        let min = array[0];
        let max = array[0];
        array.forEach(element => {
            if(element < min){
                min = element;
            }else if(element > max){
                max = element;
            }
        });

        let length = array.length;

        let object = {average,min,max,length};
        let serialized = JSON.stringify(object)
        return serialized;
    }else{
        return "Given input is not an array!";
    }
}

export {capitalize, reverseString, Calculator, caesarCipher,analyzeArray}