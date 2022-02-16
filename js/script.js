// Added Event Handler at Calculate Button

document.getElementById('calculate-button').addEventListener("click", function(){

    // geting input value from getInputValue function
    const incomeAmount = getInputValue('income-amount');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');

    // checking validation of input values
    if(incomeAmount>=0 && foodCost>=0 && rentCost>=0 && clothCost>=0 ){
        const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothCost);
        if(totalCost<incomeAmount){
            const remainingAmount = incomeAmount - totalCost;

            const totalExpenses = document.getElementById('total-expenses');
            const balance = document.getElementById('balance');

            totalExpenses.innerText = totalCost;
            balance.innerText = remainingAmount;
        }
        // Alert massage for OverCost then Income
        else{
            alert('Your Total Cost is More Than Your Income')
        } 
    }
    // Alert massage for positive number value and number type only
    else{
        alert('Please Enter a Positive Number Value')
    }
})


// function for geting input value

function getInputValue(inputId){
        const income = document.getElementById(inputId);
        const incomeAmount = income.value;
        return incomeAmount;
}


// Added event handler to save button

document.getElementById('save-button').addEventListener('click', function(){
    // income, balance, savings declaired variables
    const incomeText = document.getElementById('income-amount');
    const incomeAmount = parseInt(incomeText.value)
    const balanceText = document.getElementById('balance');
    const balance = parseInt(balanceText.innerText);
    const saving = document.getElementById('saving-input');
    const savingRate = parseInt(saving.value);

    // checking validation for Saving Input
    if(savingRate>=0){
        const savingTotal = incomeAmount *(savingRate/100);

        // checking validation for sufficient amount
        if(savingTotal<=balance){
            const savingAmount = document.getElementById('saving-amount');
            savingAmount.innerText = savingTotal;
            const remainingBalance = document.getElementById('remain-balance');
            remainingBalance.innerText = balance - savingTotal;
        }
        // Alert massage for insufficient balance
        else{
            alert('insufficient balance for saving money!!')
        }
    }
    // Alert massage for invalid saving input
    else{
        alert('Enter A valid value at Saving Input!!')
    }
})