//ASSINGMENT 2
//  Programming Fundamentals JavaScript
// Write a program where the user enters information on the prompt (product’s name, price and qty) and save the info in variables, then you have to display on the console the info, subtotal and the final price adding taxes. You should have:  

// price Calculation
// tax Calculation
// display Information
 
function plushyShop(){
    let productAmount = prompt("Enter amount of plushies");
    let price = 4.99 
    let tax = (price * .0725)
    let totalPrice = (price + tax)
    
    
    document.gotElementById("text").innerHTML+=`
    <h5>Welcome to the Plushy Shop ${prompt}</h5>
    <p>Price: ${price}</p>
    <p>Total Cost: ${totalPrice}</p>
    `;
    console.log = plushyShop
    }
    
    