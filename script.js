
const printD4 = document.getElementById(printD4);
printD4.addEventListener('click', function() {
    console.log(Math.floor(Math.random() * 4) +1)
})
document.querySelector(placeHolderD4) = printD4