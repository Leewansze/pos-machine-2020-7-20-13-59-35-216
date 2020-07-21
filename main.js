function getEachItem(barchodes){
    var quantity = {}, itemTmp, itemString = [];
    for (var i = 0; i < barchodes.length; i++) {
        itemTmp = barchodes[i];
        if(quantity[itemTmp]){
            quantity[itemTmp]++;
        }else{
            quantity[itemTmp] = 1;
        }
    }
    // 保存结果 [元素，次数]
    for(var o in quantity){
        itemString.push({ barcode: o, count: quantity[o]});
    }
    return itemString;
}

function getDatabase(item){
    var receiptDetail = [
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
     ];
     for(var i = 0; i < receiptDetail.length; i++){
        var obj = receiptDetail[i].barcode;
        for(var j = 0; j< item.length; j++){
            // for(var o in item){
            var oneBarcode = item[j].barcode;
            if(obj == oneBarcode){
                // item.push({ name: receiptDetail[i].name, price: receiptDetail[i].price});
                item[j]['name'] = receiptDetail[i].name;
                item[j]['price'] = receiptDetail[i].price;
                console.debug("success")
                break;
            }
        }
    }
     return item;
}

function getSubtotalPrice(item){
    for(var i = 0; i < item.length; i++){
        // item.push({ subTotal: item.count*item.price});
        item[i]['subTotal'] = item[i].count*item[i].price;
    }
    return item;
}

function getReceiptTotalPrice(item){
    var totalPrice = 0;
    for(var i = 0; i < item.length; i++){
        totalPrice += item[i].subTotal;
    }
    return totalPrice;
}

function transFormToReceipt(item, totalPrice){
    var printContent = '\n***<store earning no money>Receipt ***\n';
    for(var i = 0; i< item.length; i++){ 
        printContent += 'Name: ' + item[i].name + ', Quantity: ' + item[i].count + ', Unit price: ' + item[i].price + ' (yuan), Subtotal: ' + item[i].subTotal + ' (yuan)'

        if(i != length-1){
            printContent += '\n';
        }

    }
    printContent += '----------------------\n' + 'Total: ' + totalPrice + ' (yuan)\n**********************';
    return printContent;
}


function printReceipt(barcodes) {
//     console.log(`
// ***<store earning no money>Receipt ***
// Name: Coca-Cola, Quantity: 5, Unit price: 3 (yuan), Subtotal: 15 (yuan)
// Name: Sprite, Quantity: 2, Unit price: 3 (yuan), Subtotal: 6 (yuan)
// Name: Battery, Quantity: 1, Unit price: 2 (yuan), Subtotal: 2 (yuan)
// ----------------------
// Total: 23 (yuan)
// **********************`)
    var item = getEachItem(barcodes);
    var itemObject = getDatabase(item);
    var subTotal = getSubtotalPrice(itemObject);
    var totalPrice = getReceiptTotalPrice(subTotal);
    console.log(transFormToReceipt(subTotal, totalPrice));
}


module.exports = {
    printReceipt
};