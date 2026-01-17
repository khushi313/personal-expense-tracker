function addExpense() {
    let desc = document.getElementById("desc").value;
    let amount = document.getElementById("amount").value;
    let date = document.getElementById("date").value;

    if (desc === "" || amount === "" || date === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("tableBody");

    let row = table.insertRow();

    row.insertCell(0).innerText = desc;
    row.insertCell(1).innerText = "₹" + amount;
    row.insertCell(2).innerText = date;

    let actionCell = row.insertCell(3);
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.className = "delete-btn";
    btn.onclick = function () {
        row.remove();
    };

    actionCell.appendChild(btn);

    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("date").value = "";
}
