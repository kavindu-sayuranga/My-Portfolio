function saveItem() {

    //get item details from user inputs
    let itemID = $("#txtItemId").val();
    let itemName = $("#txtItemName").val();
    let itemQty = $("#txtItemQty").val();
    let itemPrice = $("#txtItemPrice").val();

    //create customer object
    var item=new ItemDTO(itemID,itemName,itemPrice,itemQty);

    itemDB.push(item);


}

function clearAllItemDetails() {
    $('#txtItemId,#txtItemName,#txtItemQty,#txtItemPrice,#txtItemSearch').val("");
    $('#itemId,#itemName,#itemQtyOnHand,#itemPrice').val("");

    $('#txtItemId,#txtItemName,#txtItemQty,#txtItemPrice').css('border', '2px solid #ced4da');
    $('#itemId,#itemName,#itemQtyOnHand,#itemPrice').css('border', '2px solid #ced4da');

    $('#txtItemId').focus();

    $('#btnItemSave,#btnItemUpdate,#btnItemDelete').prop('disabled', true);
    $('#itemName,#itemPrice,#itemQtyOnHand').prop('disabled', true);

}

function loadAllItem() {
    $("#itemTable").empty();
    for (var i of itemDB) {
        let row = `<tr><td>${i.getItemCode()}</td><td>${i.getItemName()}</td><td>${i.getItemQty()}</td><td>${i.getItemPrice()}</td></tr>`;
        $("#itemTable").append(row);
    }
}

function searchItem(id) {
    for (var i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemCode() == id) {
            return itemDB[i];
        }
    }
}

function updateItem() {
    let itemName = $("#itemName").val();
    let itemQty = $("#itemQtyOnHand").val();
    let itemPrice = $("#itemPrice").val();

    var itemId = $("#itemId").val();
    var response = searchItem(itemId);
    let index = itemDB.indexOf(response);

    itemDB[index].setItemName(itemName);
    itemDB[index].setItemQty(itemQty);
    itemDB[index].setItemPrice(itemPrice);

    clearAllItemDetails();
    loadAllItem();
}

function deleteItem(index) {
    itemDB.pop(index);

    clearAllItemDetails();
    loadAllItem();

    $("#txtItemCount").text(itemDB.length);


}