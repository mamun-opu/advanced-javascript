function add(num1, num2){
    console.log(arguments);
    var parameter = arguments;
    parameter = [...parameter];
    result = 0;
    for (let x = 0; x < parameter.length; x++) {
        const element = parameter[x];
        var result = result+element;
    }
    return result;
}
const result = add(2,3,5);
console.log(result);