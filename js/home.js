// add money from

document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();    
    const inputAddMoney = document.getElementById("input-add-money").value;
    const addAmount = parseFloat(inputAddMoney);
    

    const inputPinNumber = document.getElementById('input-pin-number').value;
    // console.log( addAmount, inputPinNumber);
    if(inputPinNumber === '1234'){
        const addMoney = document.getElementById('current-balance').innerText;
        const balance = parseFloat(addMoney);
        const addBalance = balance + addAmount;
       
        document.getElementById('current-balance').innerText = addBalance;
    }
    else{
        alert('wrong pin!')
    }
})


// cash out from
document.getElementById("cash-out-btn").addEventListener('click', function(event){
    event.preventDefault();
    const inputCashOut = document.getElementById("input-cash-out").value;
    const inputCashNumber = parseFloat(inputCashOut);
    const inputCashPin = document.getElementById("input-cash-out-pin").value;
    
    if(inputCashPin === '1234'){
        const currentBalance = document.getElementById("current-balance").innerText;
        const balanceNumber = parseFloat(currentBalance);
        const newBalance = balanceNumber - inputCashNumber;
        document.getElementById('current-balance').innerText = newBalance;
    }
    else{
        alert('wrong code!')
    }
})


// add money and cash out clickable

document.getElementById("show-cash-out-btn").addEventListener('click', function(){

    const cashOutForm = document.getElementById("cash-out-form").classList.remove('hidden');

    const addMoneyForm = document.getElementById("add-money-form").classList.add('hidden');
})

document.getElementById('show-add-money-btn').addEventListener('click', function(){
    const addMoneyForm = document.getElementById('add-money-form').classList.remove('hidden');
    
    const cashOutForm = document.getElementById("cash-out-form").classList.add('hidden');
    
})