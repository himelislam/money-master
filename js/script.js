// Added Event Handler at Calculate Button

document.getElementById('calculate-button').addEventListener("click", function(){

    // geting input value from getInputValue function
    const incomeAmount = getInputValue('income-amount');
    const foodCost = getInputValue('food-cost');
    const rentCost = getInputValue('rent-cost');
    const clothCost = getInputValue('cloth-cost');

    // variables for error massage
    const errorOne = document.getElementById('error1');
    const errorTwo = document.getElementById('error2');
    const errorThree = document.getElementById('error3');
    const errorFour = document.getElementById('error4');

    // checking validation of input values
    if(incomeAmount>=0 && foodCost>=0 && rentCost>=0 && clothCost>=0 ){
        const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothCost);
        errorOne.classList.add('hidden');
        if(totalCost<incomeAmount){
            const remainingAmount = incomeAmount - totalCost;

            const totalExpenses = document.getElementById('total-expenses');
            const balance = document.getElementById('balance');

            totalExpenses.innerText = totalCost;
            balance.innerText = remainingAmount;

            errorTwo.classList.add('hidden');
        }
        // Error massage for OverCost then Income
        else{
            // Error ('Your Total Cost is More Than Your Income')
            errorOne.classList.remove('hidden');
            errorTwo.classList.add('hidden');
            errorThree.classList.add('hidden');
            errorFour.classList.add('hidden');
        } 
    }
    // Error massage for positive number value and number type only
    else{
        // Error ('Please Enter a Positive Number Value')
        errorOne.classList.add('hidden');
        errorTwo.classList.remove('hidden');
        errorThree.classList.add('hidden');
        errorFour.classList.add('hidden');
    }
})


// function for geting input value

function getInputValue(inputId){
        const income = document.getElementById(inputId);
        const incomeAmount = income.value;
        return incomeAmount;
}


// Added event handler at save button

document.getElementById('save-button').addEventListener('click', function(){
    // income, balance, savings declaired variables
    const incomeText = document.getElementById('income-amount');
    const incomeAmount = parseInt(incomeText.value)
    const balanceText = document.getElementById('balance');
    const balance = parseInt(balanceText.innerText);
    const saving = document.getElementById('saving-input');
    const savingRate = parseInt(saving.value);

    // variables for error massage
    const errorOne = document.getElementById('error1');
    const errorTwo = document.getElementById('error2');
    const errorThree = document.getElementById('error3');
    const errorFour = document.getElementById('error4');

    // checking validation for Saving Input
    if(savingRate>=0){
        const savingTotal = incomeAmount *(savingRate/100);
        errorThree.classList.add('hidden');

        // checking validation for sufficient amount
        if(savingTotal<=balance){
            const savingAmount = document.getElementById('saving-amount');
            savingAmount.innerText = savingTotal;
            const remainingBalance = document.getElementById('remain-balance');
            remainingBalance.innerText = balance - savingTotal;

            errorFour.classList.add('hidden');
        }
        // Error massage for insufficient balance
        else{
            // Error('insufficient balance for saving money!!')
            errorOne.classList.add('hidden');
            errorTwo.classList.add('hidden');
            errorThree.classList.remove('hidden');
            errorFour.classList.add('hidden');
        }
    }
    // Error massage for invalid saving input
    else{
        // Error('Enter A valid value at Saving Input!!')
        errorOne.classList.add('hidden');
        errorOne.classList.add('hidden');
        errorThree.classList.add('hidden');
        errorFour.classList.remove('hidden');
    }
})