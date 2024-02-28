const dataForm = document.querySelector(".data__form")
let currentData = new Date();
const lastYear = document.querySelector("#lastyear")
const lastMonth = document.querySelector("#lastmonth")
const lastDay = document.querySelector("#lastday")

dataForm.addEventListener("submit",function(event){
    event.preventDefault();
    let inputData = new Date(document.getElementById('input__data').value)
    let years = currentData.getFullYear() - inputData.getFullYear();
    let months = currentData.getMonth() - inputData.getMonth();
    let days = currentData.getDate() - inputData.getDate();
   
    if(months<0 ||(months === 0 && currentData.getDate()<inputData.getDate())){
        years--;
        months+=12;
    }
   
    if (days < 0) {
        months--;
        var lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days += lastMonthDate;
    }
    
    lastYear.textContent = years;
    lastMonth.textContent = months;
    lastDay.textContent = days;
    let result = document.querySelector(".result");
    result.textContent = `Siz ${years} yil, ${months} oy va ${days} kun yashadingiz`;
})