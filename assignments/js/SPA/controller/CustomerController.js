$("#btnCustomerSave").click(function () {

    saveCustomer();
    clearAll();
    loadAllCustomer();
    loadAllCustomerIds();

    $("#customerTable>tr").off("click");

    $("#customerTable>tr").click(function () {

        let cusId = $(this).children(":eq(0)").text();
        let cusName = $(this).children(":eq(1)").text();
        let cusAddress = $(this).children(":eq(2)").text();
        let cusSalary = $(this).children(":eq(3)").text();

        $("#customerId").val(cusId)
        $("#customerName").val(cusName)
        $("#customerSalary").val(cusSalary)
        $("#customerAddress").val(cusAddress)
    });
});

$("#btnCustomerDelete").click(function () {
    var cusId = $("#customerId").val();
    var response = searchCustomer(cusId);

    let index = customerDB.indexOf(response);
    let res = confirm("Do you really need to delete this customer ?");
    if (res) {
        deleteCustomer(index);
    }
});

$("#btnCustomerUpdate").click(function () {
    updateCustomer();
});

function saveCustomer() {

    let customerID = $("#txtCusId").val();
    let customerName = $("#txtCusName").val();
    let customerAddress = $("#txtCusAddress").val();
    let customerSalary = $("#txtCusSalary").val();


    var customer = new CustomerDTO(customerID,customerName,customerAddress,customerSalary);
    customerDB.push(customer);

}

function deleteCustomer(index) {
    customerDB.pop(index);

    clearAll();
    loadAllCustomer();
    $("#txtCustomerCount").text(customerDB.length);

}

function updateCustomer() {
    let cusName = $("#customerName").val();
    let cusAddress = $("#customerAddress").val();
    let cusSalary = $("#customerSalary").val();

    var cusId = $("#customerId").val();
    var response = searchCustomer(cusId);
    let index = customerDB.indexOf(response);

    customerDB[index].setCustomerName(cusName);
    customerDB[index].setCustomerSalary(cusSalary);
    customerDB[index].setCustomerAddress(cusAddress);

    clearAll();
    loadAllCustomer();

}

function searchCustomer(id) {
    for (var i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCustomerId() == id) {
            return customerDB[i];
        }
    }
}

function clearAll() {
    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary,#txtCustomerSearch').val("");
    $('#customerId,#customerName,#customerAddress,#customerSalary').val("");

    $('#txtCusId,#txtCusName,#txtCusAddress,#txtCusSalary').css('border', '2px solid #ced4da');
    $('#customerId,#customerName,#customerAddress,#customerSalary').css('border', '2px solid #ced4da');

    $('#txtCusId').focus();

    $('#btnCustomerSave,#btnCustomerUpdate,#btnCustomerDelete').prop('disabled', true);
    $('#customerName,#customerSalary,#customerAddress').prop('disabled', true);

}

function loadAllCustomer() {

    $("#customerTable").empty();
    for (var i of customerDB) {
        let row = `<tr><td>${i.getCustomerId()}</td><td>${i.getCustomerName()}</td><td>${i.getCustomerAddress()}</td><td>${i.getCustomerSalary()}</td></tr>`;
        $("#customerTable").append(row);
    }
}