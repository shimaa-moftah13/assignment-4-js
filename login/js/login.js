var userList = [];
userList =  JSON.parse( localStorage.getItem("userList"))

var loginEmail  = document.getElementById("loginInputEmail")
var loginPassword  = document.getElementById("loginInputPassword")


document.getElementById("login").addEventListener("click", function(){
    if(loginEmail.value == '' || loginPassword.value == '' ){
        document.getElementById('warningName').innerHTML = '<p>All inputs is required</p>'
    }
    else{
        checkUser();
    }
})

function checkUser(){
  for (var i = 0; i < userList.length; i++){
    if(loginEmail.value == userList[i].email && loginPassword.value == userList[i].password){
        var y = userList[i].name
        localStorage.setItem('userName', y);
        location.href = '../../home/index.html';
        break;

    }
  }
}