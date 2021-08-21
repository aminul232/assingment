//----- Memory-----//
const minimumMemory = document.getElementById('minimummemory');
const maximumMemory = document.getElementById('maximummemory');
const memoryCost = document.getElementById('memoryprice');


minimumMemory.addEventListener("click", function(){
    memoryCost.innerText = "0";
    updateTotal();
});

maximumMemory.addEventListener("click", function(){
    memoryCost.innerText ="100";
    updateTotal();
});


// -----Storage-----//
const minimumStorage = document.getElementById('minimumstorage');
const mediumStorage = document.getElementById('mediumstorage');
const maximumStorage = document.getElementById('maximumstorage');
const storageCost = document.getElementById('storageprice');


minimumStorage.addEventListener('click', function(){
    storageCost.innerText = "0";
    updateTotal();
})

mediumStorage.addEventListener('click', function(){
    storageCost.innerText = "100";
    updateTotal();
})

maximumStorage.addEventListener('click', function(){
    storageCost.innerText = "180";
    updateTotal();
})

//-------Delivery-------//
const freeDelivery = document.getElementById('deliveryfree');
const paidDelivery = document.getElementById('deliverypaid');
const costDelivery = document.getElementById('deliverycost');

freeDelivery.addEventListener('click', function(){
    costDelivery.innerText = "0";
    updateTotal();
})

paidDelivery.addEventListener('click', function(){
    costDelivery.innerText = "20";
    updateTotal();
})

// ---updateTotal----//

function updateTotal(){
    const bestPrice = parseInt(bestprice.innerText);
    const memoryprice = parseInt (memoryCost.innerText);
    const storageprice = parseInt(storageCost.innerText);
    const deliveryCost = parseInt(costDelivery.innerText);
    
    const grandtotal = (memoryprice + bestPrice + storageprice + deliveryCost);
    total.innerText = grandtotal; 
    document.getElementById('anothertotal').innerText = total.innerText;
}