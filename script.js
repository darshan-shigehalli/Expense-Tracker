

let initialamt = document.querySelector("#ini");
let form = document.querySelector("#expense-form");
let expenselist = document.querySelector("#expense-list");
let descriptionip = document.querySelector("#description");
let amountip = document.querySelector("#amount");
let dateip = document.querySelector("#date");
let categoryip = document.querySelector("#category");


let totalExpenses = 0;
let balance = 0;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    mainthing();
});

function mainthing() {
    let desc = descriptionip.value;
    let amt = parseFloat(amountip.value);
    let date = dateip.value;
    let cat = categoryip.value;


    let iniamt = parseFloat(initialamt.value);
    balance = iniamt;

    totalExpenses += amt;
    balance = iniamt - totalExpenses;


    let list = document.createElement("li");
    list.innerHTML = `<b>${amt}</b> rupees spent on <b>${desc}</b> on <b>${date}</b> for <b>${cat}</b>`;
    expenselist.append(list);


    document.querySelector("#initial-amt").textContent = iniamt;
    document.querySelector("#total-expenses").textContent = totalExpenses;
    document.querySelector("#balance").textContent = balance;

    let dele = document.querySelector("#ini");
    dele.remove();
    form.reset();
}










