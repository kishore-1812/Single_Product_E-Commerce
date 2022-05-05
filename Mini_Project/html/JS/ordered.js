var randNum = Math.floor((Math.random() * 100) + 1)
sessionStorage.setItem("orderNo",randNum)
var finalTotal = sessionStorage.getItem('order_total')
var finalItems = sessionStorage.getItem('items_list')
var username =sessionStorage.getItem('Username')
var address = sessionStorage.getItem('address')
var mobile = sessionStorage.getItem('PhoneNo')

var email=sessionStorage.getItem("emailId")


var idea = JSON.parse(finalItems)



var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var newdate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate()+3);
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  sessionStorage.setItem("orderDate",date)
  sessionStorage.setItem("deliveryDate",newdate)
  sessionStorage.setItem("odDay",time)
generate_table()

function generate_table() {
  
  var body = document.getElementsByTagName("body")[0];
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tbl.style.width = '100%';
  tbl.style.height = "10rem";
  tbl.style.paddingLeft="20px";
  tbl.style.paddingTop="100px";
  tbl.style.paddingRight="20px";
  tbl.style.margin= 0;
  for (var i = 0; i < 2; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 7; j++) {
      var cell = document.createElement("td");
      if(i === 0 && j === 0 ){
        var cellText = document.createTextNode("ORDER No");
        cell.appendChild(cellText);
      }
      if(i === 0 && j === 1 ){
        var cellText = document.createTextNode("Username");
        cell.appendChild(cellText);
      }
      if(i === 0 && j === 2 ){
        var cellText = document.createTextNode("Items List");
        cell.appendChild(cellText);
      }
      if(i === 0 && j === 3 ){
        var cellText = document.createTextNode("Total Amount");
        cell.appendChild(cellText);
      }
      if(i === 0 && j === 4 ){
        var cellText = document.createTextNode("Address");
        cell.appendChild(cellText);
      }
      if(i === 0 && j === 5 ){
        var cellText = document.createTextNode("Time Of Order");
        cell.appendChild(cellText);
      }
      if(i === 0 && j === 6 ){
        var cellText = document.createTextNode("Time of Delivery");
        cell.appendChild(cellText);
      }
      if(i === 1 && j === 0 ){
        var cellText = document.createTextNode("ORDER "+randNum);
        cell.appendChild(cellText);
      }
      if(i === 1 && j === 1 ){
        var cellText = document.createTextNode(username);
        cell.appendChild(cellText);
      }
      if(i === 1 && j === 2 ){
        for(let i=0; i<idea.length; i++){
          var ele1 = idea[i].itemName;
          var ele2 = idea[i].numberOfQuantity;
          var cellText = document.createTextNode(ele1 + " - " + ele2 +",  ");
          cell.appendChild(cellText);
        }
      }
      if(i === 1 && j === 3 ){
        var cellText = document.createTextNode(finalTotal);
        cell.appendChild(cellText);
      }
      if(i === 1 && j === 4 ){
        var cellText = document.createTextNode(address);
        cell.appendChild(cellText);
      }
      if(i === 1 && j === 5 ){
        var cellText = document.createTextNode("Date - " + date + " Time - " + time);
        cell.appendChild(cellText);
      }
      if(i === 1 && j === 6 ){
        var cellText = document.createTextNode("Date - " + newdate + " Time - " + time);
        cell.appendChild(cellText);
      }
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "2");
  deliveryEmail()
}
function deliveryEmail(){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "terragreenind@gmail.com",
    Password: "Terragreen@ind",
    To: email,
    From: "terragreenind@gmail.com",
    Subject: "Drink Order",
    Body: `<h3>The new delivery is</h3><div>OrderNO : ${randNum}</div><div>items bought : ${finalItems}</div><div>total amount paid : ${finalTotal}</div><div>username : ${username}</div><div>delivery Address : ${address}</div><div>Contact Number : ${mobile}</div><div>Order Date : ${date}</div><div>delivery Date : ${newdate}</div>` ,
  })
  .then(
    message => alert(message)
  );
}


