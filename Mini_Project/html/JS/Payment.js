function Option1(){
    const w=document.getElementById('card_details');
    const x=document.getElementById('Net_Banking');
    const y=document.getElementById('UPI');
    const z=document.getElementById('PAYTM');
    w.style.display = "block";
    x.style.display ="none";
    y.style.display ="none";
    z.style.display ="none";
}

function Option2(){
    const w=document.getElementById('card_details');
    const x=document.getElementById('Net_Banking');
    const y=document.getElementById('UPI');
    const z=document.getElementById('PAYTM');
    w.style.display ="none";
    x.style.display = "block";
    y.style.display ="none";
    z.style.display ="none";
  }

function Option3(){
    const w=document.getElementById('card_details');
    const x=document.getElementById('Net_Banking');
    const y=document.getElementById('UPI');
    const z=document.getElementById('PAYTM');
    y.style.display = "block";
    x.style.display ="none";
    w.style.display ="none";
    z.style.display ="none";   
  }
function Option4(){
    const w=document.getElementById('card_details');
    const x=document.getElementById('Net_Banking');
    const y=document.getElementById('UPI');
    const z=document.getElementById('PAYTM');
    x.style.display ="none";
    y.style.display ="none";
    w.style.display ="none";
    z.style.display = "block";
  }
  function check1(){
    if(document.getElementById('hdfc').checked===true){
      option5()
    }
  }
  function check2(){
    if(document.getElementById('icici').checked===true){
      option5()
    }
  }
  function check3(){
    if(document.getElementById('axis').checked===true){
      option5()
    }
  }
  function check4(){
    if(document.getElementById('citi').checked===true){
      option5()
    }
  }
  function option5(){
    const x=document.getElementById('credentials');
    if(x.style.display === "none"){
      x.style.display = "block";
    }else{
      x.style.display ="block";
    }
  }
  
  // var total2=sessionStorage.getItem('total1')
  // console.log(total2)
  get = sessionStorage.getItem('total1')
  
  document.getElementsByClassName('total')[0].innerHTML = get

  quants = sessionStorage.getItem("array")

  var email=sessionStorage.getItem("emailId")

  var username =sessionStorage.getItem('Username')

  function done(){
    sendEmail()
    sessionStorage.removeItem('total1')
    sessionStorage.removeItem("array")
    sessionStorage.setItem("order_total",get)
    sessionStorage.setItem("items_list",quants)
    window.location.href = "ordered.html"
    alert("Your payment is successful for the order")
  }

  function sendEmail(){
    Email.send({
      Host: "smtp.gmail.com",
      Username: "terragreenind@gmail.com",
      Password: "Terragreen@ind",
      To: email,
      From: "terragreenind@gmail.com",
      Subject: "Drink Order",
      Body: `<h3>Your Order has been placed successfully and will be delivered to you in 3 days time.</h3><div>username : ${username}</div><div>items bought : ${quants}</div><div>total amount paid : ${get}</div>` ,
    })
    .then(
      message => alert(message)
    );
  }