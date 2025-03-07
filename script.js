const celsiusField = document.querySelector("#celsiue");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const temType = document.querySelector("#temp-type");


window.addEventListener("load",() =>{
    degree.value="";
    celsiusField.innerHTML="";
})

convertBtn.addEventListener("click",(e) =>{
    e.preventDefault();
    convertToCelsius();

    
})
function convertToCelsius(){
    let inputValue = degree.value;

    if(temType.value ==="fahrenheit"){
        const fahrenheitToCelsius = (inputValue -32)*(5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;
        c`;
    }
    else if(temType.value==="kelvin"){
         const kelvinToCelsius = inputValue -273.15;
         celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;
         c`;
    }
}