let btn= document.getElementById("convert-btn");
// console.log(btn);
let input= document.getElementById('number')
// console.log(input);
let output= document.getElementById('output')
// console.log(output)
btn.onclick= () =>{
    if(input.value=="")
    {
        // console.log("Please enter a valid number")
        output.textContent="Please enter a valid number"
        return;
    } else if(input.value<0){
        output.textContent="Please enter a number greater than or equal to 1"
        return;
    } else if(input.value>3999)
    {
        output.textContent="Please enter a number less than or equal to 3999";
        return;
    }
    else{
        let arabicNumber= Number.parseInt(input.value);
        let romanNumber= arabicToRoman(arabicNumber);
        output.textContent=romanNumber;
    }
};

function arabicToRoman(num)
{
    const romanNumerals=[
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"},
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"},
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"},
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"},
    ];

    let result="";
    
    for(let i=0; i<romanNumerals.length; i++)
    {
        while(num>=romanNumerals[i].value)
        {
            result+=romanNumerals[i].symbol;
            num-=romanNumerals[i].value;
        }
    }

    return result;
}