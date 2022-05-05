var firebaseConfig = {
    apiKey: "AIzaSyC-ioCwujv-o4kfB4BxdpXcwaPgyikudnY",
    authDomain: "terragreenind-e78a5.firebaseapp.com",
    projectId: "terragreenind-e78a5",
    storageBucket: "terragreenind-e78a5.appspot.com",
    messagingSenderId: "372378081806",
    appId: "1:372378081806:web:2d7066f7d62b70d9acba5f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Initialize variables
    const auth = firebase.auth()
    const database = firebase.database()
    
    // Set up our register function
    function signUp() {
      // Get all our input fields
      full_name = document.getElementById('full_name').value
      Username = document.getElementById('Username').value
      email = document.getElementById('email').value
      password = document.getElementById('password').value
      phoneNo = document.getElementById('Phone').value
      residential = document.getElementById('text_area').value
    
      // Validate input fields
      if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
      }
      if (validate_field(full_name) == false || validate_field(residential) == false || validate_field(phoneNo) == false || validate_field(Username) == false) {
        alert('One or More Extra Fields is Outta Line!!')
        return
      }
     
      // Move on with Auth
      auth.createUserWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          email : email,
          full_name : full_name,
          Username : Username,
          phoneNo : phoneNo,
          residential : residential,
          last_login : Date.now()
        }
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).set(user_data)
    
        // DOne
        alert('User Created!!')
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
    
    
    // Set up our login function
    function signIn() {
      // Get all our input fields
      email = document.getElementById('Email').value
      password = document.getElementById('Password').value
    
      // Validate input fields
      if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
      }
    
      auth.signInWithEmailAndPassword(email, password)
      .then(function() {
        // Declare user variable
        var user = auth.currentUser
    
        // Add this user to Firebase Database
        var database_ref = database.ref()
    
        // Create User data
        var user_data = {
          last_login : Date.now()
        }
    
        // Push to Firebase Database
        database_ref.child('users/' + user.uid).update(user_data)
    
        // DOne
        alert('User Logged In!!')
      })
      .catch(function(error) {
        // Firebase will use this to alert of its errors
        var error_code = error.code
        var error_message = error.message
    
        alert(error_message)
      })
    }
    

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUserData(user.uid)
        const y=document.getElementById('sign_in')
        y.style.display = "none";
        const z=document.getElementById('profile')
        z.style.display = "inline";
        const x=document.getElementById('default')
        x.style.display ="none";
        if(window.location.pathname === '/html/Cart.html'){
          const x= document.getElementById('cart')
              x.style.display="flex";
        } 
      }
    })
    function getUserData(uid) {
      firebase.database().ref('users/' + uid).once("value", snapshot => {
          let userData = snapshot.val();
          var name= userData.Username;
          var id=userData.email;
          var password=userData.password;
          var pno=userData.phoneNo;
          var addr=userData.residential;
          sessionStorage.setItem("Username",name)
          sessionStorage.setItem("address",addr)
          sessionStorage.setItem("emailId",id)
          sessionStorage.setItem("passwrod",password)
          sessionStorage.setItem("PhoneNo",pno)
          document.getElementsByClassName('getusername')[0].innerHTML = name
          document.getElementsByClassName('getemail')[0].innerHTML = id
          document.getElementsByClassName('getphone')[0].innerHTML = pno
          document.getElementsByClassName('getaddress')[0].innerHTML = addr
      })
      
    } 
    function signOut(){
		auth.signOut();
		alert("Signed Out");
    window.location.href="index.html"
	  }
    // Validate Functions
    function validate_email(email) {
      expression = /^[^@]+@\w+(\.\w+)+\w$/
      if (expression.test(email) == true) {
        // Email is good
        return true
      } else {
        // Email is not good
        return false
      }
    }
    function validate_password(password) {
      // Firebase only accepts lengths greater than 6
      if (password < 6) {
        return false
      } else {
        return true
      }
    }
    function validate_field(field) {
      if (field == null) {
        return false
      }
      if (field.length <= 0) {
        return false
      } else {
        return true
      }
    }