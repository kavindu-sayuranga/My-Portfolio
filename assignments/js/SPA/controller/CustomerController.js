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