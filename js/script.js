document.getElementById('calculate-button').addEventListener("click", function(){
    // const income = document.getElementById('income-amount');
    // const incomeAmount = income.value;
    const incomeAmount = getInputValue('income-amount');

    // const food = document.getElementById('food-cost');
    // const foodCost = food.value;
    const foodCost = getInputValue('food-cost');

    // const rent = document.getElementById('rent-cost');
    // const rentCost = rent.value;
    const rentCost = getInputValue('rent-cost');

    // const cloth = document.getElementById('cloth-cost');
    // const clothCost = cloth.value;
    const clothCost = getInputValue('cloth-cost');

    if(incomeAmount>=0 && foodCost>=0 && rentCost>=0 && clothCost>=0 ){
        const totalCost = parseInt(foodCost) + parseInt(rentCost) + parseInt(clothCost);
        if(totalCost<incomeAmount){
            const remainingAmount = incomeAmount - totalCost;

            const totalExpenses = document.getElementById('total-expenses');
            const balance = document.getElementById('balance');

            totalExpenses.innerText = totalCost;
            balance.innerText = remainingAmount;
        }
        else{
            alert('Your Total Cost is More Than Your Income')
        }
        
    }
    else{
        alert('Please Enter a Positive Number Value')
    }

    
})

function getInputValue(inputId){
        const income = document.getElementById(inputId);
        const incomeAmount = income.value;
        return incomeAmount;
}

document.getElementById('save-button').addEventListener('click', function(){
    const incomeText = document.getElementById('income-amount');
    const incomeAmount = parseInt(incomeText.value)
    const balanceText = document.getElementById('balance');
    const balance = parseInt(balanceText.innerText);

    const saving = document.getElementById('saving-input');
    const savingRate = parseInt(saving.value);

    const savingTotal = incomeAmount *(savingRate/100);

    if(savingTotal<=balance){
        const savingAmount = document.getElementById('saving-amount');
        savingAmount.innerText = savingTotal;
        const remainingBalance = document.getElementById('remain-balance');
        remainingBalance.innerText = balance - savingTotal;
    }
    else{
        alert('insufficient balance for saving money!!')
    }

    

})